import React, { Component } from "react";
import axios from "axios";
import SingleMap from "./SingleMap.js";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  getHospitalList,
  getAltStructureList,
  getHospitalsbyLocation,
  getAtlStructuresbyLocation,
  getDistanceDuration
} from "../api.js";

class MapWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      //hospitalArray renders all the hospital from the backend
      hospitalArray: [],
      //Will render all the alternative structure from the backend
      altStructure: [],
      // newstructureArray render all the filtered hospitals from the firltering process
      newstructureArray: [],
      // structureArray renders all hospitals and alt structures in existance (full array)
      structureArray: []
    };
  }
  // Allow us to filter data coming fro the back end to render only some kind of hospitals
  componentDidMount() {
    const userLocation = this.props.userLocation;

    // get data from our backend Express API (localhost:2999)
    if (userLocation) {
      // console.log(userLocation.latitude);
      // console.log(userLocation.longitude);
      axios
        .all([
          getHospitalsbyLocation(userLocation.latitude, userLocation.longitude),
          getAtlStructuresbyLocation(
            userLocation.latitude,
            userLocation.longitude
          )
        ])
        .then(
          axios.spread((responseHos, responseAlt) => {
            // console.log("Structure list", response.data);
            const { neededSpecialist, patientType } = this.props;
            // console.log(neededSpecialist, patientType);
            const hospitalArray = responseHos.data || [];
            const altStructure = responseAlt.data || [];
            let i = 0;
            for (i = 0; i <= 10; i++) {
              altStructure[i].filtered = true;
            }
            const tenFirstaltStructure = altStructure.slice(0, 10);
            // console.log(altStructure);
            // console.log(newstructureArray);

            const filteredHospiatls = hospitalArray.filter(el => {
              if (el.availablePoles) {
                //filtered is the object that allow us to know if the hospital is or not in the proposition list
                el.filtered = el.availablePoles.some(
                  pole =>
                    pole.pathology === neededSpecialist &&
                    (pole.patientType === patientType ||
                      pole.patientType === "Universel")
                );

                return el.filtered;
              }
            });

            const newstructureArray = tenFirstaltStructure
              .concat(filteredHospiatls)
              .slice(0, 20);
            console.log(newstructureArray);
            const mapboxArray = newstructureArray.map(el =>
              getDistanceDuration(
                userLocation.latitude,
                userLocation.longitude,
                el.longitude,
                el.latitude
              ).then(response => {
                el.duration = response.data.routes[0].duration;
              })
            );
            axios.all(mapboxArray).then(() => {
              newstructureArray.sort(function(a, b) {
                return b.duration - a.duration;
              });
              console.log(newstructureArray);
              this.setState({ newstructureArray });
            });

            const structureArray = filteredHospiatls.concat(altStructure);
            console.log(structureArray);

            this.setState({
              structureArray,
              hospitalArray,
              altStructure,
              newstructureArray
            });
          })
        )
        .catch(() => {
          alert("Sorry! Something went wrong with the search.");
        });
    }
  }
  render() {
    const { newstructureArray, open } = this.state;

    return (
      <section className="MapWrapper">
        <Row>
          <Col
            sm={{ span: 12, order: 2 }}
            md={{ span: 4, order: 2 }}
            id="map-filter"
          >
            <div id="accordion">
              <div className="card border-bottom-0">
                <div className="card-header" id="headingOne">
                  <Button
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    {/* condition to change the voir map button to voir condition over the propositions list */}
                    {open ? (
                      <p className="clollapsBtnText">VOIR MAP</p>
                    ) : (
                      <p className="clollapsBtnText">VOIR PROPOSITIONS</p>
                    )}
                  </Button>
                </div>
                <Collapse
                  in={this.state.open}
                  className=" dimension"
                  id="example-collapse-text"
                >
                  <div aria-labelledby="headingOne" data-parent="#accordion">
                    {/* ---------------------------------------------------------- */}
                    {/* this table display the structure propostions into the collaps button list */}
                    {/* ---------------------------------------------------------- */}
                    <table className="table scrolling">
                      <thead className="thead-light">
                        <tr>
                          <th className="title1Col" scope="col">
                            Tri/Pertinence
                          </th>
                          <th className="text-center colDeux" scope="col">
                            Ouverte
                          </th>
                          <th className="text-center colDeux" scope="col">
                            Attente
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {newstructureArray.map((oneStructure, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <ul className="list-group list-group-flush resultTb FCol">
                                  <li className="list-group-item namePolice small">
                                    <b>{oneStructure.name}</b>
                                  </li>
                                  <li className="list-group-item typePolice">
                                    <a href="tel:+33{popupInfo.phoneNumber}">
                                      {oneStructure.phoneNumber}
                                    </a>{" "}
                                  </li>
                                </ul>
                              </td>
                              <td className="cel  colDeux">
                                {oneStructure.AppelPrealable ? (
                                  <span className="badge badge-success badge-pill">
                                    Oui
                                  </span>
                                ) : (
                                  <span className="badge badge-danger badge-pill">
                                    Non
                                  </span>
                                )}
                              </td>
                              <td className="cel colDeux">
                                <ul className="list-group list-unstyled resultTb">
                                  <li className="list-list-unstyled">
                                    <span className="badge badge-primary">
                                      30 min
                                    </span>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>

          <Col sm={{ span: 12, order: 2 }} md={{ span: 8, order: 2 }}>
            {/* pass name of results array */}
            <SingleMap
              hospitalArray={this.state.hospitalArray}
              altStructure={this.state.altStructure}
              newstructureArray={this.state.newstructureArray}
              structureArray={this.state.structureArray}
              userLocation={this.props.userLocation}
            />
          </Col>
        </Row>
      </section>
    );
  }
}

export default MapWrapper;

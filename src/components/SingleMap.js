// See and copy pasta available components
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SingleMap.scss";
import structuresAlternatives from '../structuresAlternatives.json'
import MapGL, {
  Marker,
  Popup

  // NavigationControl
} from "react-map-gl";
import CityPin from "./CityPin";
import CityInfo from "./CityInfo";
import MAPDATA from "../mapDummyData.json";
import Collapse from 'react-bootstrap/Collapse'

class SingleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 9.5,
        pitch: 45,
        bearing: -17.6
      },
      popupInfo: null,
      strAlternatives: structuresAlternatives.slice(0, 5),
      open: true,
    };
    this._onViewportChange = this._onViewportChange.bind(this);
  }

  // update map on window size
  _onViewportChange(viewport) {
    this.setState({ viewport });
  }

  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
          
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    const {strAlternatives} = this.state
    const { open } = this.state;
    return (
      <Row className="no-gutters">
        <Col
          sm={{ span: 12, order: 2 }}
          md={{ span: 3, order: 1 }}
          id="map-filter"
        >
          <div id="accordion">
            <div className="card border-bottom-0">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    {open ? (
                      <p class="clollapsBtnText">VOIR MAP</p>
                      ) : (
                      <p class="clollapsBtnText">VOIR PROPOSITIONS</p>
                      )}
                  </button>
                </h5>
              </div>
              <Collapse in={this.state.open} className="collapse show dimension">
              <div
                
                
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <table class="table scrolling">
                  <thead class="thead-light">
                      <tr>
                      <th class="title1Col" scope="col" >Tri/Pertinence</th>
                      <th class="text-center colDeux" scope="col" >Sur RDV</th>
                      <th class="text-center colDeux" scope="col" >Temps total</th>
                      </tr>
                  </thead>
                  <tbody >
                    {strAlternatives.map((oneStructure)=>{
                      return (
                          <tr>
                          <td >
                              <ul class="list-group list-group-flush resultTb FCol">
                                  <li class="list-group-item namePolice">Nom: {oneStructure.Nom}</li>
                                  <li class="list-group-item typePolice">Type: {oneStructure.typeDeStructure}</li>
                              </ul>
                          </td>
                          <td class="cel  colDeux">
                          {oneStructure.AppelPrealable ? (
                              <span class="badge badge-success badge-pill">Oui</span>
                          ):(
                              <span class="badge badge-danger badge-pill">Non</span>
                          )}
                          </td>
                          <td class="cel colDeux">
                          <ul class="list-group list-unstyled resultTb">
                              <li class="list-list-unstyled"><span class="badge badge-primary">30</span></li>
                              <li class="list-list-unstyled">min</li>
                          </ul>
                          </td>
                          </tr>
                          )}
                        )}
                  </tbody>
              </table>
              </div>
            
            </Collapse>
            </div>
          </div>
        </Col>
        <Col sm={{ span: 12, order: 1 }} md={{ span: 9, order: 2 }}>
          {/* // REFACTOR INSIDE A COMPONENT */}
          <MapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicHJvamVjdDNpcm9uaGFjayIsImEiOiJjanNpdzA4aXcxemloNDRueDBkaXlkZDh0In0.bbNCzs-0njORLSHu9bXeDQ"
            mapStyle="mapbox://styles/project3ironhack/cjsk4xibk5rjh1fmqo9k31hym"
            width="100%"
            height={window.innerHeight - 56}
            // got solution here https://github.com/uber/react-map-gl/issues/604#issuecomment-462398674
            // needs some refactoring to adjust to navbar height with js or importing corresponding sass variable
            onViewportChange={this._onViewportChange}
            {...MAPDATA.map(this._renderCityMarker)}
          />
        </Col>
      </Row>
    );
  }
}

export default SingleMap;

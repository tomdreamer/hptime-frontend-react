import React, { Component } from "react";
import structuresAlternatives from "../structuresAlternatives.json";
import "./Results.scss";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strAlternatives: structuresAlternatives.slice(0, 5)
    };
  }
  render() {
    const { strAlternatives } = this.state;
    return (
      <section className="Results">
        <div className="container text-center">
          <p>
            <a href="#0" className="btn btn-primary my-2 ResultMap">
              Main call to action
            </a>
            <a href="#0" className="btn btn-secondary my-2 ResultMap">
              Secondary action
            </a>
          </p>
        </div>

        <table className="table scrolling">
          <thead className="thead-light">
            <tr>
              <th className="title1Col FCol" scope="col">
                Tri/Pertinence
              </th>
              <th className="text-center" scope="col">
                Sur RDV
              </th>
              <th className="text-center" scope="col">
                Temps total
              </th>
            </tr>
          </thead>
          <tbody>
            {strAlternatives.map((oneStructure, index) => {
              return (
                <tr key={index}>
                  <td>
                    <ul className="list-group list-group-flush resultTb FCol">
                      <li className="list-group-item font-weight-bold ">
                        Nom: {oneStructure.Nom}
                      </li>
                      <li className="list-group-item">
                        Type: {oneStructure.typeDeStructure}
                      </li>
                    </ul>
                  </td>
                  <td className="cel">
                    {oneStructure.AppelPrealable ? (
                      <span className="badge badge-success badge-pill">
                        Oui
                      </span>
                    ) : (
                      <span className="badge badge-danger badge-pill">Non</span>
                    )}
                  </td>
                  <td className="cel">
                    <ul className="list-group list-unstyled resultTb">
                      <li className="list-list-unstyled">
                        <span className="badge badge-primary">30</span>
                      </li>
                      <li className="list-list-unstyled">min</li>
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Results;

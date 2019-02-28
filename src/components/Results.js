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
        <div class="container text-center">
          <p>
            <a href="#" class="btn btn-primary my-2 ResultMap">
              Main call to action
            </a>
            <a href="#" class="btn btn-secondary my-2 ResultMap">
              Secondary action
            </a>
          </p>
        </div>

        <table class="table scrolling">
          <thead class="thead-light">
            <tr>
              <th class="title1Col FCol" scope="col">
                Tri/Pertinence
              </th>
              <th class="text-center" scope="col">
                Sur RDV
              </th>
              <th class="text-center" scope="col">
                Temps total
              </th>
            </tr>
          </thead>
          <tbody>
            {strAlternatives.map(oneStructure => {
              return (
                <tr>
                  <td>
                    <ul class="list-group list-group-flush resultTb FCol">
                      <li class="list-group-item font-weight-bold ">
                        Nom: {oneStructure.Nom}
                      </li>
                      <li class="list-group-item">
                        Type: {oneStructure.typeDeStructure}
                      </li>
                    </ul>
                  </td>
                  <td class="cel">
                    {oneStructure.AppelPrealable ? (
                      <span class="badge badge-success badge-pill">Oui</span>
                    ) : (
                      <span class="badge badge-danger badge-pill">Non</span>
                    )}
                  </td>
                  <td class="cel">
                    <ul class="list-group list-unstyled resultTb">
                      <li class="list-list-unstyled">
                        <span class="badge badge-primary">30</span>
                      </li>
                      <li class="list-list-unstyled">min</li>
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

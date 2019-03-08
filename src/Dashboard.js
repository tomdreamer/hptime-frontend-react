import React, { Component } from "react";
//import MapWrapper from "./components/MapWrapper";
//import SingleMap from "./components/SingleMap";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <section className="Dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <div className="vertical-menu">
                <a href="#0" className="active">
                  Home
                </a>
                <a href="#0">Link 1</a>
                <a href="#0">Link 2</a>
                <a href="#0">Link 3</a>
                <a href="#0">Link 4</a>
              </div>
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Dashboard</h1>

              <div className="row map" />

              <h2 className="sub-header">Section title</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>Lorem</td>
                      <td>ipsum</td>
                      <td>dolor</td>
                      <td>sit</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>amet</td>
                      <td>consectetur</td>
                      <td>adipiscing</td>
                      <td>elit</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Integer</td>
                      <td>nec</td>
                      <td>odio</td>
                      <td>Praesent</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>libero</td>
                      <td>Sed</td>
                      <td>cursus</td>
                      <td>ante</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;

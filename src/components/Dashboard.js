import React, { Component } from "react";
// import MapWrapper from "./components/MapWrapper";
// import SingleMap from "./components/SingleMap";
import "./Dashboard.css";
import {
  getHospitalList
  //  getHospitalsbyLocation,
  // getAtlStructuresbyLocation,
  // getDistanceDuration,
  // errorHandler
} from "../api.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitalItems: []
    };
  }
  componentDidMount() {
    getHospitalList().then(response => {
      const hospitalItems = response.data;
      console.log(hospitalItems, "coucouuuuu");
      this.setState({ hospitalItems });
    });
  }

  // dataTable() {
  //   $(document).ready(function() {
  //     $("#example").DataTable({
  //       searching: true
  //     });
  //   });
  // }

  render() {
    const { hospitalItems } = this.state;
    return (
      <section className="Dashboard">
        <h2>Hospital Dashboard</h2>
        <table
          id="example"
          className="table table-striped table-bordered "
          cellSpacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th className="th-sm">Hospital Name</th>
              <th className="th-sm">Group Name</th>
              <th className="th-sm">Phone Number</th>
              <th className="th-sm">Street Address</th>
              <th className="th-sm">City, Zipcode</th>
              <th className="th-sm">Access Map</th>
              <th className="th-sm">Management Entity</th>
              <th className="th-sm">Edit</th>
              <th className="th-sm">Delete</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {hospitalItems.map((oneHospital, index) => {
              return (
                <tr key={index}>
                  <td>{oneHospital.name}</td>
                  <td>{oneHospital.group}</td>
                  <td>{oneHospital.phoneNumber}</td>
                  <td>
                    {oneHospital.streetNumber} {oneHospital.roadType}{" "}
                    {oneHospital.streetName}
                  </td>
                  <td>
                    {oneHospital.city}, {oneHospital.zipCode}
                  </td>
                  <td>
                    <a href={oneHospital.urlToPlan} className="text-info">
                      Link
                    </a>
                  </td>
                  <td>{oneHospital.managerEntity}</td>
                  <td>
                    <a className="btn btn-primary btn-xs">
                      <i className="far fa-edit text-white" />
                    </a>
                  </td>

                  <td>
                    <p
                      data-placement="top"
                      data-toggle="tooltip"
                      title="Delete"
                    >
                      <button
                        className="btn btn-danger btn-xs"
                        data-title="Delete"
                        data-toggle="modal"
                        data-target="#delete"
                      >
                        <i className="fa fa-trash" aria-hidden="true" />
                      </button>
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <script>dataTable()</script>
      </section>
    );
  }
}

export default Dashboard;

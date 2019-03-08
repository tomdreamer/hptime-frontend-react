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
        <table
          id="example"
          class="table table-striped table-bordered "
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th class="th-sm">Hospital Name</th>
              <th class="th-sm">Group Name</th>
              <th class="th-sm">Phone Number</th>
              <th class="th-sm">Street Address</th>
              <th class="th-sm">City, Zipcode</th>
              <th class="th-sm">Access Map</th>
              <th class="th-sm">Management Entity</th>
              <th class="th-sm">Edit</th>
              <th class="th-sm">Delete</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {hospitalItems.map((oneHospital, index) => {
              return (
                <tr>
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
                    <a href={oneHospital.urlToPlan}>Link</a>
                  </td>
                  <td>{oneHospital.managerEntity}</td>
                  <td>
                    <a class="btn btn-primary btn-xs">
                      <i class="fa fa-pencil" aria-hidden="true" />
                    </a>
                  </td>

                  <td>
                    <p
                      data-placement="top"
                      data-toggle="tooltip"
                      title="Delete"
                    >
                      <button
                        class="btn btn-danger btn-xs"
                        data-title="Delete"
                        data-toggle="modal"
                        data-target="#delete"
                      >
                        <i class="fa fa-trash" aria-hidden="true" />
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

import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FilterBar extends Component {
  clickHandler(event) {
    this.props.updatePatient(event);
  }

  render() {
    return (
      <div className="px-2 bg-light">
        <Form.Control
          name="neededSpecialist"
          onChange={event => this.clickHandler(event)}
          as="select"
        >
          <option>Sélectionnez une spécialité.</option>
          <option value="Ophtalmologiques">Ophtalmologiques</option>
          <option value="Oto-rhino-laryngologiques">
            Oto-rhino-laryngologiques
          </option>
          <option value="Dentaires">Dentaires</option>
          <option value="Oto-rhino-laryngologiques">
            Oto-rhino-laryngologiques
          </option>
          <option value="Plaies de la main">Plaies de la main</option>
          <option value="Générales">Générales</option>
          <option value="Gynéco-obstétricales">Gynéco-obstétricales</option>
          <option value="Proctology">Proctology</option>
          <option value="Psychiatriques">Psychiatriques</option>
        </Form.Control>
        <div className="card-header" />
      </div>
    );
  }
}

export default FilterBar;

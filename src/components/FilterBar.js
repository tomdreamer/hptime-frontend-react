import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FilterBar extends Component {
  clickHandler(event) {
    this.props.updatePatient(event);
  }

  state = {};
  render() {
    console.log(this.props);
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label />
          <Form.Control
            name="neededSpecialist"
            onChange={event => this.clickHandler(event)}
            as="select"
          >
            <option disabled>J'ai un autre souci.</option>
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
        </Form.Group>
      </Form>
    );
  }
}

export default FilterBar;

import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./LocationSearchInput.scss";

/* global google */
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    const longitude = place.geometry.viewport.ga.l;
    const latitude = place.geometry.viewport.ma.l;
    console.log(latitude, longitude);
  }

  render() {
    return (
      <div className="input-group">
        <FormControl
          type="text"
          placeholder="Where are you?"
          id="autocomplete"
          ref={this.autocompleteInput}
        />
        <div className="input-group-append">
          <Button variant="outline-dark">Go</Button>
        </div>
      </div>
    );
  }
}
export default LocationSearchInput;

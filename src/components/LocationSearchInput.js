import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./LocationSearchInput.scss";

// do not remove the line below please
/* global google */

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserPosition: {
        latitude: null,
        longitude: null
      },
      isLoadingCoordinates: false
    };

    // binds for events
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.getUserLocationBrowser = this.getUserLocationBrowser.bind(this);
  }

  // load Google API for autocompletion on mount
  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  // update state if any change on form
  handlePlaceChanged() {
    this.setState({
      isLoadingCoordinates: true
    });
    const place = this.autocomplete.getPlace();
    const longitude = place.geometry.viewport.ga.l;
    const latitude = place.geometry.viewport.ma.l;
    console.log(latitude, longitude);

    this.setState({
      currentUserPosition: {
        latitude: latitude,
        longitude: longitude
      },
      isLoadingCoordinates: false
    });
  }

  // get user coords with HTML5 browser feature on click
  getUserLocationBrowser() {
    const { currentUserPosition, isLoadingCoordinates } = this.state;

    // triggered only if user is not located
    if (!currentUserPosition.latitude) {
      // loading icon
      this.toggleSearchCoordinates(isLoadingCoordinates);

      const location = window.navigator && window.navigator.geolocation;
      if (location) {
        location.getCurrentPosition(
          position => {
            // update state with results
            const { isLoadingCoordinates } = this.state;
            this.toggleSearchCoordinates(isLoadingCoordinates);
            // TODO get address name from user coordinates
            this.setState({
              currentUserPosition: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }
            });
          },
          error => {
            this.setState({
              latitude: "err-latitude",
              longitude: "err-longitude"
            });
            console.log("Cannot find you err..:", error);
          }
        );
      }
    }
  }

  // toggle loading icon
  toggleSearchCoordinates(currentValue) {
    this.setState({ isLoadingCoordinates: !currentValue });
  }

  render() {
    return (
      <div className="input-group">
        <FormControl
          type="text"
          placeholder="Où?"
          // ask browser coordinates
          onClick={() => {
            this.getUserLocationBrowser();
          }}
          // autocomplete on type
          id="autocomplete"
          ref={this.autocompleteInput}
        />

        <div className="input-group-append">
          <Button variant="outline-secondary">
            {this.state.isLoadingCoordinates ? (
              <i className="fas fa-circle-notch fa-spin" />
            ) : (
              <i className="fas fa-search" />
            )}
          </Button>
        </div>
      </div>
    );
  }
}

export default LocationSearchInput;

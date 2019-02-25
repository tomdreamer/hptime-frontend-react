// See and copy pasta available components
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SingleMap.scss";
import ReactMapGL from "react-map-gl";
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
      }
    };
  }

  _onViewportChange = viewport => this.setState({ viewport });

  render() {
    const { viewport } = this.state;

    return (
      <Row className="no-gutters">
        <Col
          sm={{ span: 12, order: 2 }}
          md={{ span: 3, order: 1 }}
          id="map-filter"
        >
          <h1 className="display-3">Filter column</h1>
          <h4 className="display-6 text-muted">Map on right receive props..</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            rhoncus efficitur nunc nec dictum. Vivamus varius gravida
            ullamcorper. Curabitur id pharetra odio. Integer molestie est ut
            laoreet vulputate. Pellentesque vehicula sodales enim. Phasellus ut
            finibus sapien. Ut porttitor eros a dictum congue. Suspendisse quis
            mi tristique, convallis dui nec, condimentum tellus. Nulla sit amet
            facilisis lectus. Nam gravida sem id nisl accumsan, a sodales neque
            ullamcorper. Nulla dictum ac nunc ut ultricies. Donec auctor, eros
            vitae lobortis condimentum, justo est vehicula odio, a pharetra est
            mauris ut velit. Nullam viverra, ex non tristique iaculis, arcu
            mauris semper sem, at auctor orci mi sit amet sem. Donec nec
            pharetra tellus, at feugiat mi. Nunc mattis mi in enim semper, ac
            accumsan dolor hendrerit. Maecenas sit amet elementum nisi, sit amet
            pharetra neque. Suspendisse a turpis et velit cursus mollis tempor
            in mi. Praesent vitae enim suscipit, tincidunt magna porttitor,
            aliquet nisl. Suspendisse dapibus risus eget mauris varius, at
            pharetra odio fringilla. Maecenas scelerisque eros ac augue mattis
            mattis. Vestibulum fermentum sollicitudin accumsan. Pellentesque et
            euismod nibh, varius blandit mi. Nunc a nibh risus. Aliquam
            tincidunt, odio nec porttitor maximus, nibh est blandit mi, quis
            aliquet tellus libero vitae nibh. Suspendisse potenti. Sed mattis
            eget nisl ullamcorper egestas. Praesent nibh lorem, aliquam nec
            tortor et, ornare sodales erat. Nam ut cursus ante. Phasellus
            accumsan sollicitudin posuere. Vestibulum lacinia enim at sapien
            commodo, ac lobortis tortor placerat. Proin placerat fermentum velit
            et mollis. Praesent hendrerit, nunc quis bibendum dictum, lectus
            nibh posuere risus, elementum lacinia nunc nulla quis urna. Vivamus
            in iaculis ligula. Phasellus ac ex ut justo feugiat euismod vitae id
            velit. Vestibulum tristique in felis vel volutpat. Vestibulum
            gravida tristique sem eu consequat. Praesent suscipit eros sit amet
            dapibus viverra. Etiam posuere felis et ligula imperdiet tincidunt.
            Quisque euismod ligula nisl, maximus porta mi sollicitudin aliquam.
            Vestibulum a arcu sollicitudin, consectetur justo sed, placerat
            orci. Sed viverra orci nec velit pulvinar accumsan quis non metus.
            Maecenas gravida purus ac laoreet porttitor. Nullam sed placerat
            elit, tristique porttitor quam. Pellentesque enim ligula, faucibus
            ac rutrum vitae, tristique in dolor. Vestibulum sit amet consectetur
            nunc.
          </p>
        </Col>
        <Col sm={{ span: 12, order: 1 }} md={{ span: 9, order: 2 }}>
          {/* // REFACTOR INSIDE A COMPONENT */}
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            width="100%"
            height={window.innerHeight - 56}
            // got solution here https://github.com/uber/react-map-gl/issues/604#issuecomment-462398674
            // needs some refactoring to adjust to navbar height with js or importing corresponding sass variable

            onViewportChange={this._onViewportChange}
          />
        </Col>
      </Row>
    );
  }
}

export default SingleMap;

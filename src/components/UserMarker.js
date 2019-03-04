import React, { PureComponent } from "react";
import "./UserMarker.scss";

class UserMarker extends PureComponent {
  render() {
    const size = 165;
    return (
      <div
        class="dot"
        style={{
          cursor: "pointer",
          transform: `translate(${-size}px,${-size - 10}px)`
        }}
      >
        <div class="centraldot" />
        <div class="wave" />
        <div class="wave2" />
      </div>
    );
  }
}

export default UserMarker;

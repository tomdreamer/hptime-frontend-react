import React, { PureComponent } from "react";
import "./UserMarker.scss";

class UserMarker extends PureComponent {
  render() {
    const size = 10;
    return (
      <div
        className="dot"
        style={{
          cursor: "pointer",
          transform: `translate(${-size}px,${-size}px)`
        }}
      >
        <div className="centraldot" />
        <div className="wave" />
        <div className="wave2" />
      </div>
    );
  }
}

export default UserMarker;

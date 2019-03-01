import React, { Component } from "react";
import "./PopUp.css";

class PopUp extends Component {
  render() {
    const { info } = this.props;
    const displayName = `${info.city}, ${info.state}`;

    return (
      <section className="PopUp">
        {" "}
        <div>
          {displayName} |{" "}
          <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
          >
            Wikipedia
          </a>
        </div>
        <img alt="info" width={240} src={info.image} />
      </section>
    );
  }
}

export default PopUp;

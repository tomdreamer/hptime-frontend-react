import React, { Component } from "react";
import "./SpeedDial.css";
import posed from "react-pose";

const Section = posed.section({
  open: {
    transition: { ease: "easeOut", duration: 0 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 0 }
});

class SpeedDial extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isOpen: !this.state.isVisible
      });
    }, 0);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Section pose={isOpen ? "open" : "closed"}>
        <a href="tel:15" className="float bg-danger text-white rounded-circle">
          <i className="fa fa-phone my-float fa-sm" aria-hidden="true" />{" "}
          <span className="dial-text">15</span>
        </a>
      </Section>
    );
  }
}
export default SpeedDial;

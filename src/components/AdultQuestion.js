import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./AdultQuestion.scss";
import posed from "react-pose";

const Section = posed.section({
  open: {
    transition: { ease: "easeInOut", duration: 1400 },
    x: 0,
    delayChildren: 0,
    staggerChildren: 0,
    opacity: 1,
    delay: 0
  },
  closed: {
    x: 0,
    delay: 0,
    opacity: 0
  }
});

const Div = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 20 }
});

const P = posed.p({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 400 }
});

const ButtonWrap = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 800 }
});

class AdultQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  // componentDidUpdate(oldProps) {
  //   if (!oldProps.isActive && this.props.isActive) {
  //     this.setState({ isOpen: true });
  //     console.log("updateAdult");
  //   }
  // }

  componentDidMount() {
    this.setState({ isOpen: true });
    console.log("mountAdult");
  }

  clickHandler(event) {
    this.props.nextStep();
    this.props.updatePatient(event);
    this.props.onFormStep(this.props.totalSteps, this.props.currentStep);
  }
  render() {
    const { isOpen } = this.state;

    return (
      <Section pose={isOpen ? "open" : "closed"} className="text-center">
        <Div className="bg-toy" />
        <P className="lead my-4">Le patient a-t-il plus de 16 ans ?</P>

        <ButtonWrap>
          <Button
            variant="primary"
            onClick={event => this.clickHandler(event)}
            name="patientAdult"
            value="Enfants"
          >
            Enfant
          </Button>

          <Button
            variant="secondary"
            onClick={event => this.clickHandler(event)}
            name="patientAdult"
            value="Adultes"
            className="mx-3"
          >
            Adulte
          </Button>
        </ButtonWrap>
      </Section>
    );
  }
}

export default AdultQuestion;

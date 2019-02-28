import React, { Component } from "react";
import UserQuestions from "./UserQuestions";
import PathologyQuestions from "./PathologyQuestions";
import AdultQuestion from "./AdultQuestion";
import StepWizard from "react-step-wizard";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientGender: "",
      neededSpecialist: "",
      patientAdult: true,
      patientLocalization: ""
    };
  }

  updatePatient(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(event.target);
  }

  render() {
    return (
      <StepWizard>
        {/* <div> */}
        <AdultQuestion updatePatient={event => this.updatePatient(event)} />

        <PathologyQuestions
          updatePatient={event => this.updatePatient(event)}
        />
        {/* </div> */}
      </StepWizard>
    );
  }
}

export default Questions;

{
  /* <section className="patientQuestions">
<h1>Coucou questions</h1>
<button
  onClick={event => this.updatePatient(event)}
  name="patientType"
  value="adult"
>
  Adulte
</button>
<button
  onClick={event => this.updatePatient(event)}
  name="patientType"
  value="child"
>
  Enfant
</button>
<button
  onClick={event => this.updatePatient(event)}
  name="patientType"
  value="pregnant"
>
  Femme enceinte
</button>
</section>
<section className="pathologyQuestions" />
<button
onClick={event => this.updatePatient(event)}
name="patientCondition"
value="general"
>
Généraliste
</button>
<button
onClick={event => this.updatePatient(event)}
name="patientCondition"
value="ophtalmology"
>
Yeux
</button>
<button
onClick={event => this.updatePatient(event)}
name="patientCondition"
value="dental"
>
Dents
</button>
<button
onClick={event => this.updatePatient(event)}
name="patientCondition"
value="hand"
>
Main
</button>
<button
onClick={event => this.updatePatient(event)}
name="patientCondition"
value="ORL"
>
Gorge, nez, oreilles.
</button>
<button
onClick={event => this.updatePatient(event)}
name="patientCondition"
value="proctology"
>
Anus
</button> */
}

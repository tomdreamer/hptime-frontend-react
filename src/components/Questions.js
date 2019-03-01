import React, { Component } from "react";
// import UserQuestions from "./UserQuestions";
import PathologyQuestions from "./PathologyQuestions";
import AdultQuestion from "./AdultQuestion";
import StepWizard from "react-step-wizard";
import UserLocalisation from "./UserLocalisation.js";
class Questions extends Component {
  render() {
    return (
      <StepWizard>
        <AdultQuestion
          updatePatient={event => this.props.updatePatient(event)}
        />

        <PathologyQuestions
          updatePatient={event => this.props.updatePatient(event)}
        />
        <UserLocalisation onGeolocation={this.props.onGeolocation} />
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

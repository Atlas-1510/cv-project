import React from "react";
import Education from "./Education";
import Button from "../../utilities/Button";
import PropTypes from "prop-types";

function Educations(props) {
  return props.educations.map((education) => (
    <div key={education.id}>
      <Education
        appStyles={props.appStyles}
        handleChange={props.handleChange}
        stateSection="education"
        id={education.id}
        education={education}
      />
      <Button
        color={props.appStyles.headerColor}
        fontColor={props.appStyles.backgroundColor}
        label="Delete"
        onClick={() => {
          props.deleteEducation(education.id);
        }}
        type="button"
      ></Button>
    </div>
  ));
}

Educations.propTypes = {
  educations: PropTypes.array.isRequired,
  appStyles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default Educations;

// import React, { Component } from "react";
// import Education from "./Education";
// import Button from "../../utilities/Button/Button";

// export class Educations extends Component {
//   render() {
//     return props.educations.map((education) => (
//       <div key={education.id}>
//         <Education
//           appStyles={props.appStyles}
//           onChange={props.onChange}
//           stateSection="education"
//           id={education.id}
//           education={education}
//         />
//         <Button
//           color={props.appStyles.headerColor}
//           fontColor={props.appStyles.backgroundColor}
//           label="Delete"
//           onClick={() => {
//             props.deleteEntry(education.id, "education");
//           }}
//           type="button"
//         ></Button>
//       </div>
//     ));
//   }
// }

// export default Educations;

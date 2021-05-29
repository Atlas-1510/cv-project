import React from "react";
import Experience from "./Experience";
import Button from "../../utilities/Button";
import PropTypes from "prop-types";

function Experiences(props) {
  return props.experiences.map((experience) => (
    <div key={experience.id}>
      <Experience
        appStyles={props.appStyles}
        handleChange={props.handleChange}
        stateSection="experience"
        id={experience.id}
        experience={experience}
      />
      <Button
        color={props.appStyles.headerColor}
        fontColor={props.appStyles.backgroundColor}
        label="Delete"
        onClick={() => {
          props.deleteExperience(experience.id);
        }}
        type="button"
      ></Button>
    </div>
  ));
}

Experiences.propTypes = {
  experiences: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  appStyles: PropTypes.object.isRequired,
};

export default Experiences;

// import React, { Component } from "react";
// import Experience from "./Experience";
// import Button from "../../utilities/Button/Button";

// export class Experiences extends Component {
//   render() {
//     return this.props.experiences.map((experience) => (
//       <div key={experience.id}>
//         <Experience
//           appStyles={this.props.appStyles}
//           onChange={this.props.onChange}
//           stateSection="experience"
//           id={experience.id}
//           experience={experience}
//         />
//         <Button
//           color={this.props.appStyles.headerColor}
//           fontColor={this.props.appStyles.backgroundColor}
//           label="Delete"
//           // onClick={}
//           onClick={() => {
//             this.props.deleteEntry(experience.id, "experience");
//           }}
//           type="button"
//         ></Button>
//       </div>
//     ));
//   }
// }

// export default Experiences;

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

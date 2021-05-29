import React from "react";
import { Input } from "../../utilities/Input";
import PropTypes from "prop-types";

function Education(props) {
  return (
    <>
      <Input
        appStyles={props.appStyles}
        title="Institution"
        name="institution"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.education.institution}
      />
      <Input
        appStyles={props.appStyles}
        title="Degree"
        name="degree"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.education.degree}
      />
      <Input
        appStyles={props.appStyles}
        title="Start Date"
        name="start"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.education.start}
      />
      <Input
        appStyles={props.appStyles}
        title="End Date"
        name="end"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.education.end}
      />
    </>
  );
}

Education.propTypes = {
  education: PropTypes.object.isRequired,
  appStyles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  stateSection: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Education;

import React from "react";
import { Input } from "../../utilities/Input";
import PropTypes from "prop-types";

function Experience(props) {
  return (
    <>
      <Input
        appStyles={props.appStyles}
        title="Position"
        name="position"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.experience.position}
      ></Input>
      <Input
        appStyles={props.appStyles}
        title="Organisation"
        name="organisation"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.experience.organisation}
      ></Input>
      <Input
        appStyles={props.appStyles}
        title="Location"
        name="location"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.experience.location}
      ></Input>
      <Input
        appStyles={props.appStyles}
        title="Start date"
        name="start"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.experience.start}
      ></Input>
      <Input
        appStyles={props.appStyles}
        title="End date"
        name="end"
        handleChange={props.handleChange}
        stateSection={props.stateSection}
        id={props.id}
        value={props.experience.end}
      ></Input>
    </>
  );
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
  appStyles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  stateSection: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Experience;

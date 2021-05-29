import React from "react";
import { Input } from "../utilities/Input";
import TextArea from "../utilities/TextArea";
import PropTypes from "prop-types";

function PersonalInformation(props) {
  return (
    <>
      <Input
        appStyles={props.appStyles}
        title="First name"
        handleChange={props.handleChange}
        name="firstName"
        id="firstName"
        stateSection={props.stateSection}
        value={props.personalInfo.firstName}
      />
      <Input
        appStyles={props.appStyles}
        title="Last name"
        handleChange={props.handleChange}
        name="lastName"
        id="lastName"
        stateSection={props.stateSection}
        value={props.personalInfo.lastName}
      />
      <Input
        appStyles={props.appStyles}
        title="Title"
        handleChange={props.handleChange}
        name="title"
        id="title"
        stateSection={props.stateSection}
        value={props.personalInfo.title}
      />
      <Input
        appStyles={props.appStyles}
        title="Address"
        handleChange={props.handleChange}
        name="address"
        id="address"
        stateSection={props.stateSection}
        value={props.personalInfo.address}
      />
      <Input
        appStyles={props.appStyles}
        title="Phone number"
        handleChange={props.handleChange}
        name="phoneNumber"
        id="phoneNumber"
        stateSection={props.stateSection}
        value={props.personalInfo.phoneNumber}
      />
      <Input
        appStyles={props.appStyles}
        title="Email"
        handleChange={props.handleChange}
        name="email"
        id="email"
        stateSection={props.stateSection}
        value={props.personalInfo.email}
      />
      <TextArea
        appStyles={props.appStyles}
        title="Description"
        handleChange={props.handleChange}
        name="description"
        id="description"
        stateSection={props.stateSection}
        value={props.personalInfo.description}
      />
    </>
  );
}

PersonalInformation.propTypes = {
  appStyles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  personalInfo: PropTypes.object.isRequired,
};

export default PersonalInformation;

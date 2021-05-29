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

// import React, { PureComponent } from "react";
// import { Input } from "../utilities/Input";
// import TextArea from "../utilities/TextArea";

// export default class PersonalInformation extends PureComponent {
//   render() {
//     return (
//       <>
//         <Input
//           appStyles={this.props.appStyles}
//           title="First name"
//           onChange={this.props.onChange}
//           name="firstName"
//           stateSection={this.props.stateSection}
//           value={this.props.personalInfo.firstName}
//         />
//         <Input
//           appStyles={this.props.appStyles}
//           title="Last name"
//           onChange={this.props.onChange}
//           name="lastName"
//           stateSection={this.props.stateSection}
//           value={this.props.personalInfo.lastName}
//         />
//         <Input
//           appStyles={this.props.appStyles}
//           title="Title"
//           onChange={this.props.onChange}
//           name="title"
//           stateSection={this.props.stateSection}
//           value={this.props.personalInfo.title}
//         />
//         <Input
//           appStyles={this.props.appStyles}
//           title="Address"
//           onChange={this.props.onChange}
//           name="address"
//           stateSection={this.props.stateSection}
//           value={this.props.personalInfo.address}
//         />
//         <Input
//           appStyles={this.props.appStyles}
//           title="Phone number"
//           onChange={this.props.onChange}
//           name="phoneNumber"
//           stateSection={this.props.stateSection}
//           value={this.props.personalInfo.phoneNumber}
//         />
//         <Input
//           appStyles={this.props.appStyles}
//           title="Email"
//           onChange={this.props.onChange}
//           name="email"
//           stateSection={this.props.stateSection}
//           value={this.props.personalInfo.email}
//         />
//         <TextArea
//           appStyles={this.props.appStyles}
//           title="Description"
//           onChange={this.props.onChange}
//           name="description"
//           stateSection={this.props.stateSection}
//           value={this.props.personalInfo.description}
//         />
//       </>
//     );
//   }
// }

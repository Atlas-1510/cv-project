import React, { PureComponent } from "react";
import { Input } from "../utilities/Input";
import TextArea from "../utilities/TextArea";

export default class PersonalInformation extends PureComponent {
  render() {
    return (
      <>
        <Input
          appStyles={this.props.appStyles}
          title="First name"
          onChange={this.props.onChange}
          name="firstName"
          stateSection={this.props.stateSection}
          value={this.props.personalInfo.firstName}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Last name"
          onChange={this.props.onChange}
          name="lastName"
          stateSection={this.props.stateSection}
          value={this.props.personalInfo.lastName}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Title"
          onChange={this.props.onChange}
          name="title"
          stateSection={this.props.stateSection}
          value={this.props.personalInfo.title}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Address"
          onChange={this.props.onChange}
          name="address"
          stateSection={this.props.stateSection}
          value={this.props.personalInfo.address}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Phone number"
          onChange={this.props.onChange}
          name="phoneNumber"
          stateSection={this.props.stateSection}
          value={this.props.personalInfo.phoneNumber}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Email"
          onChange={this.props.onChange}
          name="email"
          stateSection={this.props.stateSection}
          value={this.props.personalInfo.email}
        />
        <TextArea
          appStyles={this.props.appStyles}
          title="Description"
          onChange={this.props.onChange}
          name="description"
          stateSection={this.props.stateSection}
          value={this.props.personalInfo.description}
        />
      </>
    );
  }
}

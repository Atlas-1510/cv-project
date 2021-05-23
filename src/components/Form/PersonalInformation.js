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
        />
        <Input
          appStyles={this.props.appStyles}
          title="Last name"
          onChange={this.props.onChange}
          name="lastName"
          stateSection={this.props.stateSection}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Title"
          onChange={this.props.onChange}
          name="title"
          stateSection={this.props.stateSection}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Address"
          onChange={this.props.onChange}
          name="address"
          stateSection={this.props.stateSection}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Phone number"
          onChange={this.props.onChange}
          name="phoneNumber"
          stateSection={this.props.stateSection}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Email"
          onChange={this.props.onChange}
          name="email"
          stateSection={this.props.stateSection}
        />
        <TextArea
          appStyles={this.props.appStyles}
          title="Description"
          onChange={this.props.onChange}
          name="description"
          stateSection={this.props.stateSection}
        />
      </>
    );
  }
}

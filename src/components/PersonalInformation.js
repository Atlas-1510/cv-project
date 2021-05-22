import React, { PureComponent } from "react";
import { Input } from "./utilities/Input";
import TextArea from "./utilities/TextArea";

export default class PersonalInformation extends PureComponent {
  render() {
    return (
      <>
        <Input
          appStyles={this.props.appStyles}
          title="First name"
          onChange={this.props.onChange}
          name="firstName"
          // value={this.props.state.firstName}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Last name"
          onChange={this.props.onChange}
          name="lastName"
        />
        <Input
          appStyles={this.props.appStyles}
          title="Title"
          onChange={this.props.onChange}
          name="title"
        />
        <Input
          appStyles={this.props.appStyles}
          title="Address"
          onChange={this.props.onChange}
          name="address"
        />
        <Input
          appStyles={this.props.appStyles}
          title="Phone number"
          onChange={this.props.onChange}
          name="phoneNumber"
        />
        <Input
          appStyles={this.props.appStyles}
          title="Email"
          onChange={this.props.onChange}
          name="email"
        />
        <TextArea
          appStyles={this.props.appStyles}
          title="Description"
          onChange={this.props.onChange}
          name="description"
        />
      </>
    );
  }
}

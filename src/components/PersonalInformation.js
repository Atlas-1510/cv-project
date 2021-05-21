import React, { PureComponent } from "react";
import { Input } from "./utilities/Input";
import TextArea from "./utilities/TextArea";

export default class PersonalInformation extends PureComponent {
  render() {
    return (
      <>
        <Input appStyles={this.props.appStyles} title="First name" />
        <Input appStyles={this.props.appStyles} title="Last name" />
        <Input appStyles={this.props.appStyles} title="Title" />
        <Input appStyles={this.props.appStyles} title="Address" />
        <Input appStyles={this.props.appStyles} title="Phone number" />
        <Input appStyles={this.props.appStyles} title="Email" />
        <TextArea appStyles={this.props.appStyles} title="Description" />
      </>
    );
  }
}

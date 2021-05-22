import React, { Component } from "react";
import { Input } from "./utilities/Input";
import Button from "./utilities/Button/Button";

export class Education extends Component {
  render() {
    return (
      <>
        <Input appStyles={this.props.appStyles} title="Institution" />
        <Input appStyles={this.props.appStyles} title="Degree" />
        <Input appStyles={this.props.appStyles} title="Start Date" />
        <Input appStyles={this.props.appStyles} title="End Date" />
        <Button
          color={this.props.appStyles.headerColor}
          fontColor={this.props.appStyles.backgroundColor}
          label="Add Education"
        />
      </>
    );
  }
}

export default Education;

import React, { Component } from "react";
import { Input } from "./utilities/Input";
import DeleteButton from "./utilities/Button/DeleteButton";

export class Education extends Component {
  render() {
    return (
      <>
        <Input appStyles={this.props.appStyles} title="Institution" />
        <Input appStyles={this.props.appStyles} title="Degree" />
        <Input appStyles={this.props.appStyles} title="Start Date" />
        <Input appStyles={this.props.appStyles} title="End Date" />
        <DeleteButton appStyles={this.props.appStyles} />
      </>
    );
  }
}

export default Education;

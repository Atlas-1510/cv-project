import React, { Component } from "react";
import { Input } from "./utilities/Input";
import TextArea from "./utilities/TextArea";

export class Experience extends Component {
  render() {
    return (
      <>
        <Input appStyles={this.props.appStyles} title="Position"></Input>
        <Input appStyles={this.props.appStyles} title="Organisation"></Input>
        <Input appStyles={this.props.appStyles} title="Location"></Input>
        <Input appStyles={this.props.appStyles} title="Start date"></Input>
        <Input appStyles={this.props.appStyles} title="End date"></Input>
      </>
    );
  }
}

export default Experience;

import React, { Component } from "react";
import { Input } from "./utilities/Input";
import Button from "./utilities/Button/Button";

export class Experience extends Component {
  render() {
    return (
      <>
        <Input appStyles={this.props.appStyles} title="Position"></Input>
        <Input appStyles={this.props.appStyles} title="Organisation"></Input>
        <Input appStyles={this.props.appStyles} title="Location"></Input>
        <Input appStyles={this.props.appStyles} title="Start date"></Input>
        <Input appStyles={this.props.appStyles} title="End date"></Input>
        <Button
          color={this.props.appStyles.headerColor}
          fontColor={this.props.appStyles.backgroundColor}
          label="Delete"
        ></Button>
      </>
    );
  }
}

export default Experience;

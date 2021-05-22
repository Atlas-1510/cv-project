import React, { Component } from "react";
import { Input } from "./utilities/Input";
import Button from "./utilities/Button/Button";

export class Experience extends Component {
  render() {
    return (
      <>
        <Input
          appStyles={this.props.appStyles}
          title="Position"
          name="position"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="Organisation"
          name="organisation"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="Location"
          name="location"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="Start date"
          name="start"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="End date"
          name="end"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
        ></Input>
        {/* <Button
          color={this.props.appStyles.headerColor}
          fontColor={this.props.appStyles.backgroundColor}
          label="Delete"
        ></Button> */}
      </>
    );
  }
}

export default Experience;

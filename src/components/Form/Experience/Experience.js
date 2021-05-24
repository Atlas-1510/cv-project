import React, { Component } from "react";
import { Input } from "../../utilities/Input";

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
          value={this.props.experience.position}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="Organisation"
          name="organisation"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
          value={this.props.experience.organisation}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="Location"
          name="location"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
          value={this.props.experience.location}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="Start date"
          name="start"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
          value={this.props.experience.start}
        ></Input>
        <Input
          appStyles={this.props.appStyles}
          title="End date"
          name="end"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
          id={this.props.id}
          value={this.props.experience.end}
        ></Input>
      </>
    );
  }
}

export default Experience;

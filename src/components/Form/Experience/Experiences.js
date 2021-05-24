import React, { Component } from "react";
import Experience from "./Experience";
import Button from "../../utilities/Button/Button";

export class Experiences extends Component {
  render() {
    return this.props.experiences.map((experience) => (
      <div key={experience.id}>
        <Experience
          appStyles={this.props.appStyles}
          onChange={this.props.onChange}
          stateSection="experience"
          id={experience.id}
          experience={experience}
        />
        <Button
          color={this.props.appStyles.headerColor}
          fontColor={this.props.appStyles.backgroundColor}
          label="Delete"
          // onClick={}
          onClick={() => {
            this.props.deleteEntry(experience.id, "experience");
          }}
          type="button"
        ></Button>
      </div>
    ));
  }
}

export default Experiences;

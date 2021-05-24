import React, { Component } from "react";
import Education from "./Education";
import Button from "../../utilities/Button/Button";

export class Educations extends Component {
  render() {
    return this.props.educations.map((education) => (
      <div key={education.id}>
        <Education
          appStyles={this.props.appStyles}
          onChange={this.props.onChange}
          stateSection="education"
          id={education.id}
          education={education}
        />
        <Button
          color={this.props.appStyles.headerColor}
          fontColor={this.props.appStyles.backgroundColor}
          label="Delete"
          onClick={() => {
            this.props.deleteEntry(education.id, "education");
          }}
          type="button"
        ></Button>
      </div>
    ));
  }
}

export default Educations;

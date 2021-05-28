import React, { Component } from "react";
import styled from "styled-components";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import PreviewWrapper from "./Preview/PreviewWrapper";

export class Body extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }
  render() {
    const { personalInfo, education, experience } = this.props.formState;
    return (
      <BodyStyles appStyles={this.props.appStyles}>
        <Form
          appStyles={this.props.appStyles}
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          loadExample={this.props.loadExample}
          resetForm={this.props.resetForm}
          onChange={this.props.onChange}
          addExperience={this.props.addExperience}
          addEducation={this.props.addEducation}
          deleteEntry={this.props.deleteEntry}
          reference={this.childRef}
        ></Form>
        <PreviewWrapper>
          <Preview userInfo={this.props.formState} reference={this.childRef} />
        </PreviewWrapper>
      </BodyStyles>
    );
  }
}

export default Body;

const BodyStyles = styled.main`
  background: ${(props) => props.appStyles.backgroundColor};
  flex-grow: 2;
  width: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

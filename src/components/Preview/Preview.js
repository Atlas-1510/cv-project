import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Header from "./Header";
import RightPanel from "./RightPanel";
import MainPanel from "./MainPanel";

// Note: Preview has to be a class component for react-to-print to work

export class Preview extends Component {
  render() {
    return (
      <StyleContainer>
        <CVdesign ref={this.props.previewRef}>
          <Header personalInfo={this.props.personalInfo} />
          <RightPanel personalInfo={this.props.personalInfo} />
          <MainPanel
            personalInfo={this.props.personalInfo}
            experiences={this.props.experience}
            educations={this.props.education}
          />
        </CVdesign>
      </StyleContainer>
    );
  }
}

export default Preview;

// Container to hold the mini preview in the page layout
const StyleContainer = styled.div`
  margin: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  zoom: 0.7;

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  position: sticky;
  top: 2rem;

  @media (min-width: 201px) and (max-width: 300px) {
    zoom: 0.3;
  }

  @media (min-width: 301px) and (max-width: 400px) {
    zoom: 0.4;
  }

  @media (min-width: 401px) and (max-width: 500px) {
    zoom: 0.5;
  }

  @media (min-width: 501px) and (max-width: 600px) {
    zoom: 0.6;
  }

  @media (min-width: 601px) and (max-width: 700px) {
    zoom: 0.7;
  }

  @media (min-width: 701px) and (max-width: 800px) {
    zoom: 0.8;
  }

  @media (min-width: 801px) and (max-width: 900px) {
    zoom: 0.3;
  }

  @media (min-width: 901px) and (max-width: 1000px) {
    zoom: 0.4;
  }

  @media (min-width: 1001px) and (max-width: 1100px) {
    zoom: 0.5;
  }

  @media (min-width: 1101px) and (max-width: 1200px) {
    zoom: 0.6;
  }

  @media (min-width: 1201px) and (max-width: 1300px) {
    zoom: 0.7;
  }

  @media (min-width: 1301px) and (max-width: 1400px) {
    zoom: 0.7;
  }
`;

// Design for the resume
const CVdesign = styled.div`
  width: 209.99mm;
  height: 296.99mm;
  display: grid;
  position: relative;
  grid-template-columns: 70% 30%;
  grid-template-rows: 10% 90%;
  grid-template-areas: "header header" "mainPanel rightPanel";
`;

Preview.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  experience: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired,
};

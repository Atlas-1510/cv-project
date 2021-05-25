import React, { Component } from "react";
import styled from "styled-components";

export default class Section extends Component {
  render() {
    return (
      <StyledSection appStyles={this.props.appStyles}>
        <SectionTitle>{this.props.title}</SectionTitle>
        {this.props.children}
      </StyledSection>
    );
  }
}

const SectionTitle = styled.h2``;

const StyledSection = styled.section`
  padding: 0.5rem;
  ${"" /* margin: 1rem 0.5rem 1rem 0.5rem; */}
  margin: 1.5rem 0.5rem 1.5rem 0.5rem;
  background: ${(props) => props.appStyles.highLightColor + "75"};
  border-radius: 1rem;
  ${"" /* background: rgba(255, 255, 255, 0.25); */}
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

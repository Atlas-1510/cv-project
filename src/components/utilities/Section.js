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
  margin: 1rem 0.5rem 1rem 0.5rem;
  background: ${(props) => props.appStyles.sectionColor};
  border-radius: 1rem;
`;

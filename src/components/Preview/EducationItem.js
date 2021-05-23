import React, { Component } from "react";
import styled from "styled-components";
import { BsArrowDown } from "react-icons/bs";

const EdWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 10% 50%;
  grid-template-areas: "dates . description";
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
  border-bottom: 1px solid lightgrey;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: dates;
  color: #3587a4;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justifty-content: flex-start;
  grid-area: description;
`;

export class EducationItem extends Component {
  render() {
    const { ed } = this.props;
    return (
      <EdWrapper>
        <DateContainer>
          <h4>{ed.start}</h4>
          <BsArrowDown size={25} />
          <h4>{ed.end}</h4>
        </DateContainer>
        <DescriptionContainer>
          <h2>{ed.degree}</h2>
          <h3>{ed.institution}</h3>
        </DescriptionContainer>
        <div></div>
      </EdWrapper>
    );
  }
}

export default EducationItem;

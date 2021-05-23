import React, { Component } from "react";
import styled from "styled-components";
import { Textfit } from "react-textfit";

const HeaderWrapper = styled.div`
  grid-area: header;
  background: #313638;
  color: #f09d51;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Textfit mode="single" max={75}>
          {this.props.personalInfo.firstName} {this.props.personalInfo.lastName}
        </Textfit>
      </HeaderWrapper>
    );
  }
}

export default Header;

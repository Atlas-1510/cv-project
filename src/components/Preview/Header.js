import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  grid-area: header;
  background: #313638;
  color: #f09d51;
  font-size: 2rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;

export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <h1>
          {this.props.personalInfo.firstName} {this.props.personalInfo.lastName}
        </h1>
      </HeaderWrapper>
    );
  }
}

export default Header;

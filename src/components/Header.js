import React, { Component } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  background: ${(props) => props.appStyles.headerColor};
  width: 100%;
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.appStyles.titleColor};
  padding: 10px 10px;
`;

export class Header extends Component {
  render() {
    return (
      <Wrapper appStyles={this.props.appStyles}>
        <StyledHeader appStyles={this.props.appStyles}>
          CV Generator
        </StyledHeader>
      </Wrapper>
    );
  }
}

export default Header;

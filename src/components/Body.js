import React, { Component } from "react";
import styled from "styled-components";

export class Body extends Component {
  render() {
    return (
      <BodyStyles appStyles={this.props.appStyles}>
        {this.props.children}
      </BodyStyles>
    );
  }
}

export default Body;

const BodyStyles = styled.main`
  background: ${(props) => props.appStyles.backgroundColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

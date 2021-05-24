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

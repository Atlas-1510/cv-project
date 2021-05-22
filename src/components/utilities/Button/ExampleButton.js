import Button from "./Button";
import styled from "styled-components";
import React, { Component } from "react";

const StyledButton = styled(Button)`
  background: orange;
  color: ${(props) => props.appStyles.backgroundColor};
`;

export class ExampleButton extends Component {
  render() {
    return (
      <>
        <StyledButton appStyles={this.props.appStyles}>Example</StyledButton>
      </>
    );
  }
}

export default ExampleButton;

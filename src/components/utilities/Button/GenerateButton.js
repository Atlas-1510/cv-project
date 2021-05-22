import Button from "./Button";
import styled from "styled-components";
import React, { Component } from "react";

const StyledButton = styled(Button)`
  background: green;
  color: ${(props) => props.appStyles.backgroundColor};
`;

export class GenerateButton extends Component {
  render() {
    return (
      <>
        <StyledButton appStyles={this.props.appStyles}>Generate</StyledButton>
      </>
    );
  }
}

export default GenerateButton;

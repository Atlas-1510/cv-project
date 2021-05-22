import React, { Component } from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background: ${(props) => props.appStyles.headerColor};
  color: ${(props) => props.appStyles.backgroundColor};
`;

export class AddButton extends Component {
  getLabel = () => {
    return this.props.label ? this.props.label : "Add";
  };
  render() {
    return (
      <StyledButton appStyles={this.props.appStyles}>
        {this.getLabel()}
      </StyledButton>
    );
  }
}

export default AddButton;

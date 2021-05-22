import React, { Component } from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background: ${(props) => props.appStyles.headerColor};
  color: ${(props) => props.appStyles.backgroundColor};
`;

export class DeleteButton extends Component {
  render() {
    return <StyledButton appStyles={this.props.appStyles}>Delete</StyledButton>;
  }
}

export default DeleteButton;

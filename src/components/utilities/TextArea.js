import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./Input";

const StyledExtendedInput = styled(StyledInput)`
  min-height: 2rem;
  font-family: inherit;
`;

export default class TextArea extends Component {
  render() {
    return (
      <StyledExtendedInput
        as="textarea"
        placeholder={this.props.title}
        appStyles={this.props.appStyles}
      ></StyledExtendedInput>
    );
  }
}

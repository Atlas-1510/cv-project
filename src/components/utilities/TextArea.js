import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./Input";

const StyledExtendedInput = styled(StyledInput)`
  min-height: 6rem;
  font-family: inherit;
`;

export default class TextArea extends Component {
  render() {
    return (
      <StyledExtendedInput
        as="textarea"
        placeholder={this.props.title}
        appStyles={this.props.appStyles}
        onChange={(e) => {
          this.props.onChange(e, this.props.stateSection);
        }}
        name={this.props.name}
        value={this.props.value}
      ></StyledExtendedInput>
    );
  }
}

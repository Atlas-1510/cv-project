import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  @media (min-width: 801px) {
    max-width: 500px;
  }
`;

export class Form extends Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.onSubmit}>
        {this.props.children}
      </StyledForm>
    );
  }
}

export default Form;

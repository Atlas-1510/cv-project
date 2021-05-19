import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export class Input extends Component {
  render() {
    return (
      <StyledInput
        placeholder={this.props.title}
        type="text"
        aria-label={this.props.title}
      ></StyledInput>
    );
  }
}

export default Input;

// Styling
const StyledInput = styled.input`
  color: blue;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid grey;
`;

// PropTypes
Input.propTypes = {
  title: PropTypes.string.isRequired,
};

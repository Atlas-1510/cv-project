import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Input extends Component {
  render() {
    return (
      <StyledInput
        appStyles={this.props.appStyles}
        placeholder={this.props.title}
        type="text"
        aria-label={this.props.title}
        onChange={this.props.onChange}
        name={this.props.name}
        value={this.props.value}
      ></StyledInput>
    );
  }
}

// Styling
const StyledInput = styled.input`
  color: ${(props) => props.appStyles.headerColor};
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

export { Input, StyledInput };

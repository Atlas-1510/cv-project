import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0 0.5rem 0;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.color};
  color: ${(props) => props.fontColor};
`;

export default class Button extends Component {
  render() {
    return (
      <StyledButton
        color={this.props.color}
        fontColor={this.props.fontColor}
        type={this.props.type}
      >
        {this.props.label}
      </StyledButton>
    );
  }
}

// PropTypes
Button.propTypes = {
  color: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

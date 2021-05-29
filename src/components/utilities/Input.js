import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <StyledInput
      appStyles={props.appStyles}
      autoComplete="off"
      type="text"
      aria-label={props.title}
      onChange={(e) => {
        props.handleChange(e, props.stateSection, props.id);
      }}
      name={props.name}
      id={props.id}
      value={props.value}
      placeholder={props.title}
    />
  );
}

Input.propTypes = {
  appStyles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  stateSection: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

// Styling
const StyledInput = styled.input`
  color: ${(props) => props.appStyles.headerColor};
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid grey;
`;

export { Input, StyledInput };

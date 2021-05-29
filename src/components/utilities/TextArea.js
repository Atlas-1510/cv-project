import React from "react";
import styled from "styled-components";
import { StyledInput } from "./Input";
import PropTypes from "prop-types";

function TextArea(props) {
  return (
    <StyledExtendedInput
      as="textarea"
      placeholder={props.title}
      appStyles={props.appStyles}
      onChange={(e) => {
        props.handleChange(e, props.stateSection);
      }}
      name={props.name}
      value={props.value}
    ></StyledExtendedInput>
  );
}

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  appStyles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  stateSection: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;

const StyledExtendedInput = styled(StyledInput)`
  min-height: 6rem;
  font-family: inherit;
`;

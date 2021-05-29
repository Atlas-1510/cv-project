import React from "react";
import styled from "styled-components";
import { Textfit } from "react-textfit";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <HeaderWrapper>
      <Textfit mode="single" max={75}>
        {props.personalInfo.firstName} {props.personalInfo.lastName}
      </Textfit>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  grid-area: header;
  background: #313638;
  color: #f09d51;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Header.propTypes = {
  personalInfo: PropTypes.object.isRequired,
};

export default Header;

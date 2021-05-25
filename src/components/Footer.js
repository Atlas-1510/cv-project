import React, { Component } from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

const StyledFooter = styled.footer`
  background: ${(props) => props.appStyles.headerColor};
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`;

export class Footer extends Component {
  render() {
    const iconColor = this.props.appStyles.titleColor;
    return (
      <StyledFooter appStyles={this.props.appStyles}>
        <a href="https://github.com/Atlas-1510/cv-project">
          <IconContext.Provider
            value={{
              color: iconColor,
              size: "3rem",
              style: { paddingRight: "0.5rem" },
            }}
          >
            <AiFillGithub />
          </IconContext.Provider>
        </a>
      </StyledFooter>
    );
  }
}

export default Footer;

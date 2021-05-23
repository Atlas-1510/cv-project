import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import RightPanel from "./RightPanel";
import MainPanel from "./MainPanel";

const PreviewWrapper = styled.div`
  width: 210mm;
  height: 297mm;
  transform: scale(0.4);
  transform-origin: top;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 10% 90%;
  grid-template-areas: "header header" "mainPanel rightPanel";
`;

export class Preview extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <PreviewWrapper>
        <Header personalInfo={userInfo.personalInfo} />
        <RightPanel />
        <MainPanel />
      </PreviewWrapper>
    );
  }
}

export default Preview;

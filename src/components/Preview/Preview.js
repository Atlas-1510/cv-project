import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import RightPanel from "./RightPanel";
import MainPanel from "./MainPanel";

const PreviewStyler = styled.div`
  width: 209.99mm;
  height: 296.99mm;
  display: grid;
  position: relative;
  grid-template-columns: 70% 30%;
  grid-template-rows: 10% 90%;
  grid-template-areas: "header header" "mainPanel rightPanel";
`;

export class Preview extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    const { userInfo } = this.props;
    return (
      <PreviewStyler ref={this.myRef}>
        <Header personalInfo={userInfo.personalInfo} />
        <RightPanel personalInfo={userInfo.personalInfo} />
        <MainPanel
          personalInfo={userInfo.personalInfo}
          experiences={userInfo.experience}
          educations={userInfo.education}
        />
      </PreviewStyler>
    );
  }
}

export default Preview;

import React, { Component } from "react";
import styled from "styled-components";

const MainPanelWrapper = styled.div`
  grid-area: mainPanel;
  background: #eeede8;
`;

export class MainPanel extends Component {
  render() {
    return <MainPanelWrapper></MainPanelWrapper>;
  }
}

export default MainPanel;

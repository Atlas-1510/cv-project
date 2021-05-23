import React, { Component } from "react";
import styled from "styled-components";

const RightPanelWrapper = styled.div`
  grid-area: rightPanel;
  background: #e0dfd5;
`;

export class RightPanel extends Component {
  render() {
    return <RightPanelWrapper></RightPanelWrapper>;
  }
}

export default RightPanel;

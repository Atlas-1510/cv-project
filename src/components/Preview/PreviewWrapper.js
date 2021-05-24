import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: auto;

  position: sticky;
  top: 0px;

  @media (min-width: 201px) and (max-width: 300px) {
    zoom: 0.3;
  }

  @media (min-width: 301px) and (max-width: 400px) {
    zoom: 0.4;
  }

  @media (min-width: 401px) and (max-width: 500px) {
    zoom: 0.5;
  }

  @media (min-width: 501px) and (max-width: 600px) {
    zoom: 0.6;
  }

  @media (min-width: 601px) and (max-width: 700px) {
    zoom: 0.7;
  }

  @media (min-width: 701px) and (max-width: 800px) {
    zoom: 0.8;
  }
`;

export class PreviewWrapper extends Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default PreviewWrapper;

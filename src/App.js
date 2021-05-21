import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import PersonalInformation from "./components/PersonalInformation";
import Experience from "./components/Experience";
import Section from "./components/utilities/Section";
import { Input } from "./components/utilities/Input";
import TextArea from "./components/utilities/TextArea";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header appStyles={appStyles}></Header>
        <Body appStyles={appStyles}>
          <Section appStyles={appStyles} title="Personal Information">
            <PersonalInformation appStyles={appStyles} />
          </Section>
          <Section title="Experience" appStyles={appStyles}>
            <Experience appStyles={appStyles} />
          </Section>
        </Body>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const appStyles = {
  headerColor: "#14213D",
  titleColor: "#FCA311",
  backgroundColor: "#f5f5f5",
  sectionColor: "#FEE0AE",
};

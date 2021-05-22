import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import PersonalInformation from "./components/PersonalInformation";
import Experience from "./components/Experience";
import Education from "./components/Education";
import AddButton from "./components/utilities/Button/AddButton";
import Section from "./components/utilities/Section";
import GenerateButton from "./components/utilities/Button/GenerateButton";
import ExampleButton from "./components/utilities/Button/ExampleButton";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header appStyles={appStyles}></Header>
        <Body appStyles={appStyles}>
          <Form appStyles={appStyles}>
            <Section appStyles={appStyles} title="Personal Information">
              <PersonalInformation appStyles={appStyles} />
            </Section>
            <Section title="Experience" appStyles={appStyles}>
              <Experience appStyles={appStyles} />
              <AddButton appStyles={appStyles} label="Add Experience" />
            </Section>
            <Section appStyles={appStyles} title="Education">
              <Education appStyles={appStyles} />
              <AddButton appStyles={appStyles} label="Add Education" />
            </Section>
            <Section appStyles={appStyles} title="">
              <GenerateButton appStyles={appStyles} />
              <ExampleButton appStyles={appStyles} />
            </Section>
          </Form>
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

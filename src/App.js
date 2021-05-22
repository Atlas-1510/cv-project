import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import PersonalInformation from "./components/PersonalInformation";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Section from "./components/utilities/Section";
import Button from "./components/utilities/Button/Button";

import "./App.css";

export default class App extends Component {
  state = {
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = (e, stateSection) => {
    console.log(e, stateSection);
    this.setState({
      [stateSection]: {
        ...this.state.stateSection,
        [e.target.name]: [e.target.value],
      },
    });
  };

  render() {
    return (
      <AppWrapper>
        <Header appStyles={appStyles}></Header>
        <Body appStyles={appStyles}>
          <Form appStyles={appStyles} onSubmit={this.onSubmit}>
            <Section appStyles={appStyles} title="Personal Information">
              <PersonalInformation
                appStyles={appStyles}
                onChange={this.onChange}
                stateSection="personalInfo"
              />
            </Section>
            <Section title="Experience" appStyles={appStyles}>
              <Experience appStyles={appStyles} />
              <Button
                color={appStyles.headerColor}
                fontColor={appStyles.backgroundColor}
                label="Add Experience"
              />
            </Section>
            <Section appStyles={appStyles} title="Education">
              <Education appStyles={appStyles} />
              <Button
                color={appStyles.headerColor}
                fontColor={appStyles.backgroundColor}
                label="Add Education"
              />
            </Section>
            <Section appStyles={appStyles} title="">
              <Button
                color="green"
                fontColor={appStyles.backgroundColor}
                label="Generate"
                type="submit"
              />
              <Button
                color="orange"
                fontColor={appStyles.backgroundColor}
                label="Load Example"
              />
              <Button
                color="red"
                fontColor={appStyles.backgroundColor}
                label="Reset"
              />
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

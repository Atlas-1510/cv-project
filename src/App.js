import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import PersonalInformation from "./components/PersonalInformation";
import Experiences from "./components/Experiences/Experiences";
import Education from "./components/Education";
import Section from "./components/utilities/Section";
import Button from "./components/utilities/Button/Button";

import { v4 as uuidv4 } from "uuid";
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
    experience: [
      {
        id: uuidv4(),
        position: "",
        organisation: "",
        location: "",
        start: "",
        end: "",
      },
    ],
    education: [
      {
        id: uuidv4(),
        institution: "",
        degree: "",
        start: "",
        end: "",
      },
    ],
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("bruh");
  };

  onChange = (e, stateSection, id) => {
    this.setState((prevState) => {
      if (id) {
        const newStateObject = {};
        for (const [key, value] of Object.entries(prevState)) {
          if (key !== stateSection) {
            newStateObject[key] = value;
          } else {
            newStateObject[key] = prevState[stateSection].map((entry) => {
              if (entry.id !== id) {
                return entry;
              } else {
                return {
                  ...entry,
                  [e.target.name]: [e.target.value],
                };
              }
            });
          }
        }
        return newStateObject;
      } else {
        return {
          ...prevState,
          [stateSection]: {
            ...prevState[stateSection],
            [e.target.name]: [e.target.value],
          },
        };
      }
    });

    // {
    //   ...prevState,
    //   [stateSection]: {
    //     ...prevState[stateSection],
    //     [e.target.name]: [e.target.value],
    //   },
    // }
  };

  addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      position: "",
      organisation: "",
      location: "",
      start: "",
      end: "",
    };
    this.setState({
      experience: [...this.state.experience, newExperience],
    });
  };

  deleteEntry = (id, stateSection) => {
    this.setState({
      [stateSection]: this.state[stateSection].filter(
        (entry) => entry.id !== id
      ),
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
              <Experiences
                experiences={this.state.experience}
                appStyles={appStyles}
                onChange={this.onChange}
                stateSection="experience"
                deleteEntry={this.deleteEntry}
              />
              <Button
                color={appStyles.headerColor}
                fontColor={appStyles.backgroundColor}
                label="Add Experience"
                onClick={() => this.addExperience()}
                type="button"
              />
            </Section>
            <Section appStyles={appStyles} title="Education">
              <Education
                appStyles={appStyles}
                onChange={this.onChange}
                stateSection="education"
                id={this.state.education[0].id}
              />
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
                onClick={this.onSubmit}
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

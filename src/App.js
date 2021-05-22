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
    // experience: {
    //   position: "",
    //   organisation: "",
    //   location: "",
    //   start: "",
    //   end: "",
    // },
    education: {
      institution: "",
      degree: "",
      start: "",
      end: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = (e, stateSection, id) => {
    this.setState((prevState) => {
      // If there is an ID
      if (id) {
        // Create a copy of state, to reflect changes
        const newStateObject = {};
        // Go through each part of state, and if it's not the part that has changed then put
        // it in the newStateObject unchanged
        for (const [key, value] of Object.entries(prevState)) {
          if (key !== stateSection) {
            newStateObject[key] = value;
          } else {
            // If this is the bit that has changed (exp or ed), then
            // iterate over each array entry to find the one that has changed
            // If the entry hasn't changed, then copy it over as normal
            newStateObject[key] = prevState[stateSection].map((entry) => {
              if (entry.id !== id) {
                return entry;
              } else {
                // If the entry has changed, copy it all over, but update
                // the part that has changed
                return {
                  ...entry,
                  [e.target.name]: [e.target.value],
                };
              }
            });
          }
        }
        return newStateObject;
        // If there is no ID, then just update as normal
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
    // Configure state to use arrays for exp and ed entries
    // Add new experience entry to state
    // then, for each exp state entry render an exp section
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
              <Experience
                appStyles={appStyles}
                onChange={this.onChange}
                stateSection="experience"
                id={this.state.experience[0].id}
              />
              <Button
                color={appStyles.headerColor}
                fontColor={appStyles.backgroundColor}
                label="Add Experience"
              />
            </Section>
            <Section appStyles={appStyles} title="Education">
              <Education
                appStyles={appStyles}
                onChange={this.onChange}
                stateSection="education"
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

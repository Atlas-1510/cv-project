import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Form/Header";
import Body from "./components/Body";
import Form from "./components/Form/Form";
import PersonalInformation from "./components/Form/PersonalInformation";
import Experiences from "./components/Form/Experience/Experiences";
import Educations from "./components/Form/Education/Educations";
import Section from "./components/utilities/Section";
import Button from "./components/utilities/Button/Button";
import Preview from "./components/Preview/Preview";

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

  addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      degree: "",
      start: "",
      end: "",
    };
    this.setState({
      education: [...this.state.experience, newEducation],
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
              <Educations
                educations={this.state.education}
                appStyles={appStyles}
                onChange={this.onChange}
                stateSection="education"
                deleteEntry={this.deleteEntry}
              />
              <Button
                color={appStyles.headerColor}
                fontColor={appStyles.backgroundColor}
                label="Add Education"
                onClick={() => this.addEducation()}
                type="button"
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
          <Preview userInfo={this.state} />
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

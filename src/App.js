import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { v4 as uuidv4 } from "uuid";
import ReactToPrint from "react-to-print";
import "./App.css";

import Form from "./components/Form/Form";
import PersonalInformation from "./components/Form/PersonalInformation";
import Experiences from "./components/Form/Experience/Experiences";
import Educations from "./components/Form/Education/Educations";
import Section from "./components/utilities/Section";
import Button from "./components/utilities/Button/Button";
import Preview from "./components/Preview/Preview";
import PreviewWrapper from "./components/Preview/PreviewWrapper";

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
      // {
      //   id: uuidv4(),
      //   position: "",
      //   organisation: "",
      //   location: "",
      //   start: "",
      //   end: "",
      // },
    ],
    education: [
      // {
      //   id: uuidv4(),
      //   institution: "",
      //   degree: "",
      //   start: "",
      //   end: "",
      // },
    ],
  };

  loadExample = () => {
    const example = {
      personalInfo: {
        firstName: "Jason",
        lastName: "Aravanis",
        title: "Mr",
        address: "Unit 1 31 Alfred Road Glen Iris VIC 3146",
        phoneNumber: "0467 500 550",
        email: "j.aravanis@icloud.com",
        description:
          "I am a 26 year old Australian male, with a background in finance and economics. I am seeking a career change into software engineering to further my professional development. Abilities that would make me a good fit for this position include strong communication and public speaking skills, the ability to self-learn, and well-developed organisational habits.",
      },
      experience: [
        {
          id: uuidv4(),
          position: "Senior Industry Analyst",
          organisation: "IBISWorld",
          location: "Melbourne",
          start: "March 2017",
          end: "October 2019",
        },
        {
          id: uuidv4(),
          position: "Media Coordinator",
          organisation: "IBISWorld",
          location: "Melbourne",
          start: "November 2019",
          end: "May 2021",
        },
      ],
      education: [
        {
          id: uuidv4(),
          institution: "The University of Melbourne",
          degree: "Bachelor of Commerce",
          start: "January 2014",
          end: "December 2016",
        },
      ],
    };
    this.setState(example);
  };

  resetForm = () => {
    const emptyForm = {
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
        // {
        //   id: uuidv4(),
        //   position: "",
        //   organisation: "",
        //   location: "",
        //   start: "",
        //   end: "",
        // },
      ],
      education: [
        // {
        //   id: uuidv4(),
        //   institution: "",
        //   degree: "",
        //   start: "",
        //   end: "",
        // },
      ],
    };
    this.setState(emptyForm);
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
                personalInfo={this.state.personalInfo}
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
              <ReactToPrint
                trigger={() => {
                  return (
                    <Button
                      color="green"
                      fontColor={appStyles.backgroundColor}
                      label="Generate"
                      type="button"
                    />
                  );
                }}
                content={() => this.componentRef}
              />
              <Button
                color="orange"
                fontColor={appStyles.backgroundColor}
                label="Load Example"
                type="button"
                onClick={this.loadExample}
              />
              <Button
                color="red"
                fontColor={appStyles.backgroundColor}
                label="Reset"
                onClick={this.resetForm}
              />
            </Section>
          </Form>
          <PreviewWrapper>
            <Preview
              userInfo={this.state}
              ref={(el) => (this.componentRef = el)}
            />
          </PreviewWrapper>
        </Body>
        <Footer appStyles={appStyles} />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const appStyles = {
  headerColor: "#313638",
  titleColor: "#F09D51",
  backgroundColor: "#f5f5f5",
  sectionColor: "#E0DFD5",
  highLightColor: "#93C9DC",
};

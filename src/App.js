import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
        firstName: "Tony",
        lastName: "Stark",
        title: "Mr",
        address: "1, Avengers Drive, New York City",
        phoneNumber: "0123 456 789",
        email: "iron_man_rulez@jarvis.com",
        description:
          "Genius billionaire playboy philanthropist. I build cool stuff and save the world sometimes.",
      },
      experience: [
        {
          id: uuidv4(),
          position: "CEO",
          organisation: "Stark Industries",
          location: "Miami, FL",
          start: "March 1984",
          end: "October 2011",
        },
        {
          id: uuidv4(),
          position: "Avenger",
          organisation: "The Avengers",
          location: "New York City, NY",
          start: "October 2012",
          end: "May 2019",
        },
      ],
      education: [
        {
          id: uuidv4(),
          institution: "MIT",
          degree: "Bachelor of Engineering",
          start: "January 1994",
          end: "December 1995",
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
        <Body
          appStyles={appStyles}
          formState={this.state}
          loadExample={this.loadExample}
          resetForm={this.resetForm}
          onChange={this.onChange}
          addExperience={this.addExperience}
          addEducation={this.addEducation}
          deleteEntry={this.deleteEntry}
        ></Body>
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

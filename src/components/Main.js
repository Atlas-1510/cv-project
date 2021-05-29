import React, { useState, useRef } from "react";
import Preview from "./Preview/Preview";
import Form from "./Form/Form";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useReactToPrint } from "react-to-print";

function Main(props) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const loadExample = () => {
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
    setPersonalInfo(example.personalInfo);
    setExperience(example.experience);
    setEducation(example.education);
  };

  const resetForm = () => {
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
    setPersonalInfo(emptyForm.personalInfo);
    setExperience([]);
    setEducation([]);
  };

  const handleChange = (e, stateSection, id) => {
    const _updatePersonalInfo = (e) => {
      setPersonalInfo((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    };

    const _updateExperience = (e, id) => {
      setExperience((prevState) => {
        return prevState.map((exp) => {
          if (exp.id === id) {
            return {
              ...exp,
              [e.target.name]: e.target.value,
            };
          } else {
            return exp;
          }
        });
      });
    };

    const _updateEducation = (e, id) => {
      setEducation((prevState) => {
        return prevState.map((ed) => {
          if (ed.id === id) {
            return {
              ...ed,
              [e.target.name]: e.target.value,
            };
          } else {
            return ed;
          }
        });
      });
    };

    if (stateSection === "personalInfo") {
      _updatePersonalInfo(e);
    } else if (stateSection === "experience") {
      _updateExperience(e, id);
    } else if (stateSection === "education") {
      _updateEducation(e, id);
    } else {
      console.log(new Error("No stateSection found for this change"));
    }
  };

  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      position: "",
      organisation: "",
      location: "",
      start: "",
      end: "",
    };
    setExperience([...experience, newExperience]);
  };

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      degree: "",
      start: "",
      end: "",
    };
    setEducation([...education, newEducation]);
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((ed) => ed.id !== id));
  };

  const previewRef = useRef();

  const handlePrint = useReactToPrint({ content: () => previewRef.current });

  return (
    <BodyStyles appStyles={props.appStyles}>
      <Form
        appStyles={props.appStyles}
        personalInfo={personalInfo}
        experience={experience}
        education={education}
        setPersonalInfo={setPersonalInfo}
        setExperience={setExperience}
        setEducation={setEducation}
        loadExample={loadExample}
        resetForm={resetForm}
        handleChange={handleChange}
        addExperience={addExperience}
        addEducation={addEducation}
        deleteExperience={deleteExperience}
        deleteEducation={deleteEducation}
        handlePrint={handlePrint}
      />
      <Preview
        personalInfo={personalInfo}
        experience={experience}
        education={education}
        previewRef={previewRef}
      />
    </BodyStyles>
  );
}

export default Main;

const BodyStyles = styled.main`
  background: ${(props) => props.appStyles.backgroundColor};
  flex-grow: 2;
  width: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

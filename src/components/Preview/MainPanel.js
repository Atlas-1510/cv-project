import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

function MainPanel(props) {
  return (
    <MainPanelWrapper>
      <Container>
        <StyledHeading>Description</StyledHeading>
        <StyledParagraph>{props.personalInfo.description}</StyledParagraph>
        <StyledHeading>Experience</StyledHeading>
        {props.experiences.map((exp) => {
          return <ExperienceItem key={exp.id} exp={exp} />;
        })}
        <StyledHeading>Education</StyledHeading>
        {props.educations.map((ed) => {
          return <EducationItem key={ed.id} ed={ed} />;
        })}
      </Container>
    </MainPanelWrapper>
  );
}

const MainPanelWrapper = styled.div`
  grid-area: mainPanel;
  background: #eeede8;
`;

const Container = styled.div`
  margin: 1rem;
`;

const StyledHeading = styled.h1`
  margin-top: 0.5rem;
`;

const StyledParagraph = styled.p`
  margin-top: 0.5rem;
  line-height: 150%;
`;

MainPanel.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  experiences: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
};

export default MainPanel;

// import React, { Component } from "react";
// import styled from "styled-components";
// import ExperienceItem from "./ExperienceItem";
// import EducationItem from "./EducationItem";

// const MainPanelWrapper = styled.div`
//   grid-area: mainPanel;
//   background: #eeede8;
// `;

// const Container = styled.div`
//   margin: 1rem;
// `;

// const StyledHeading = styled.h1`
//   margin-top: 0.5rem;
// `;

// const StyledParagraph = styled.p`
//   margin-top: 0.5rem;
//   line-height: 150%;
// `;

// export class MainPanel extends Component {
//   render() {
//     const { personalInfo, experiences, educations } = this.props;
//     return (
//       <MainPanelWrapper>
//         <Container>
//           <StyledHeading>Description</StyledHeading>
//           <StyledParagraph>{personalInfo.description}</StyledParagraph>
//           <StyledHeading>Experience</StyledHeading>
//           {experiences.map((exp) => {
//             return <ExperienceItem key={exp.id} exp={exp} />;
//           })}
//           <StyledHeading>Education</StyledHeading>
//           {educations.map((ed) => {
//             return <EducationItem key={ed.id} ed={ed} />;
//           })}
//         </Container>
//       </MainPanelWrapper>
//     );
//   }
// }

// export default MainPanel;

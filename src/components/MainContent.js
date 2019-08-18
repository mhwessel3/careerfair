import React from "react";
import Person from "./Person";
import InformationPage from "./InformationPage";
import InterviewLocations from "./InterviewLocations";
import Map from "./Map";
import Volunteer from "./Volunteer";
import Committee from "./Committee";
import RecruiterInfo from "./RecruiterInfo";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body-content">
        <p className="main-logo">illinois expo</p>
        <InformationPage />
        <h2 id="content_header">fair map</h2>
        <Map />

        <h2 id="content_header">interview locations</h2>
        <InterviewLocations />

        <h2 id="content_header">Recruiter Information</h2>
        <RecruiterInfo />

        <h2 id="content_header">Volunteer</h2>
        <Volunteer />

        <h2 id="content_header">committee</h2>
        <Committee />
      </div>
    );
  }
}

export default MainContent;

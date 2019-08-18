import React from "react";
import Person from "./Person";
import PageHeader from "./PageHeader";
import InterviewLocations from "./InterviewLocations";
import Map from "./Map";
import Volunteer from "./Volunteer";
import Committee from "./Committee";
import RecruiterInfo from "./RecruiterInfo";
import Information from "./Information";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body-content">
        <PageHeader />
        <Information />
        <InterviewLocations />
        <Volunteer />
        <Committee />
      </div>
    );
  }
}

export default MainContent;

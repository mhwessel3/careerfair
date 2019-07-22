import React from "react";
import Person from "./Person";
import InformationPage from "./InformationPage";
import InterviewLocations from "./InterviewLocations";
import Map from "./Map";
import Volunteer from "./Volunteer";
import Committee from "./Committee";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  getPageType() {
    console.log(this.props.type);
  }

  render() {
    return (
      <div>
        {this.props.type == "Information" ? (
          <div>
            <h2 id="content_header">{this.props.type}</h2>
            <InformationPage />
          </div>
        ) : this.props.type == "Map" ? (
          <div>
            <h2 id="content_header">{this.props.type}</h2>
            <Map />
          </div>
        ) : this.props.type == "InterviewLocations" ? (
          <div>
            <h2 id="content_header">{this.props.type}</h2>
            <InterviewLocations />
          </div>
        ) : this.props.type == "Committee" ? (
          <div>
            <h2 id="content_header">{this.props.type}</h2>
            <Committee />
          </div>
        ) : (
          <div>
            <h2 id="content_header">{this.props.type}</h2>
            <Volunteer />
          </div>
        )}
      </div>
    );
  }
}

export default MainContent;

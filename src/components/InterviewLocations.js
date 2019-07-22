import React from "react";
import MainContent from "./MainContent";

class InterviewLocations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="memberCards">
        <img
          id="memberImg"
          src="https://www.midlandsderm.com/wp-content/uploads/2019/04/Rachel-R.-Person-760x760.jpg"
        />
        <div id="member_wrapper">
          <div id="member_text">
            <p id="member_name">Morgan Wessel</p>
            <p id="member_title">Technology Coordinator</p>
          </div>
          <img
            id="linkedinImg"
            href="linkedin.com"
            src="https://image.flaticon.com/icons/png/512/38/38669.png"
          />
        </div>
      </div>
    );
  }
}

export default InterviewLocations;

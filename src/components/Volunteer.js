import React from "react";

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="volunteer">
        <h2 id="content_header">Volunteer</h2>
        <div className="info">
          We need your help! Volunteers are able to connect with recruiters
          before, during, and after the fair. Over $500 in gift cards will be
          raffled to thank student volunteers!
          <br />
          <br />
          <a href="http://volunteersignup.org/HT8TT">Sign up here!</a>
          <br />
          <br />
          <span className="orange">
            Contact volunteers@illinoisexpo.com with any questions.
          </span>
        </div>
      </div>
    );
  }
}

export default Volunteer;

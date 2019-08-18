import React from "react";
import MainContent from "./MainContent";

class InterviewLocations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 id="content_header">interview locations</h2>
        <div className="info">
          Below are interview handbooks based on each specific interview
          location. Click the link below to download the handbook.
          <table className="interview-list">
            <tr>
              <a href="../interview-handbooks/DCL.pdf" download>
                Digital Computer Labratory
              </a>
            </tr>
            <tr>
              <a href="../interview-handbooks/Illini-Union.pdf" download>
                Illini Union
              </a>
            </tr>
            <tr>
              <a href="../interview-handbooks/Memorial-Stadium.pdf" download>
                Memorial Stadium
              </a>
            </tr>
            <tr>
              <a href="../interview-handbooks/The-Career-Center.pdf" download>
                The Career Center
              </a>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default InterviewLocations;

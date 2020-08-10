import React from "react";

class Days extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="days">
        <h2 id="content_header">Day Information</h2>
        <div className="info">
        This semester's career fair will have different days for different job types.
        Below are the CareerEco links to certain day information and which companies will be attending.
        </div>

        <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=e15f5e45-20c9-4680-9a89-abe9017ed33e">September 9th: <br/> Internships</a>
        <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=de6381c0-ebea-4931-ad7b-abf4017de39c">September 10th: <br/> Full-time Employement</a>
        <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=e15f5e45-20c9-4680-9a89-abe9017ed33e">September 11th: <br/>Internship Overflow Day</a>

      </div>
    );
  }
}

export default Days;

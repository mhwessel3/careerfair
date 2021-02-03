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
        This semester's career fair will be one day for all job types.
        Below are the CareerEco links to the fair information as well as which companies will be attending.
        </div>

        <a href="https://careereco.com/Fair/CandidateDashboard?fairId=49c73a49-7ec5-419b-a8f3-abf401828800"> February 17th: <br/> Internship & Full-time Employement</a>
        <a href="https://careereco.com/Fair/Schedule?fairId=49c73a49-7ec5-419b-a8f3-abf401828800">Company List</a>

      </div>
    );
  }
}

export default Days;

// Second & Third Day Cancelled
// <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=e15f5e45-20c9-4680-9a89-abe9017ed33e">September 11th: <br/>Start Up, Government, Graduate School & Non-profit</a>
// <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=de6381c0-ebea-4931-ad7b-abf4017de39c">September 10th: <br/> Full-time Employement</a>
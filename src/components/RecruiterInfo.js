import React from "react";
import MainContent from "./MainContent";

class RecruiterInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recruiter-info">
        <ul>
          <li>
            <a>Registration</a>
          </li>
          <li>
            <a>Booths</a>
          </li>
          <li>
            <a>Payment</a>
          </li>
          <li>
            <a>Cancellation</a>
          </li>
          <li>
            <a>Shipping</a>
          </li>
          <li>
            <a>Interviews</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default RecruiterInfo;

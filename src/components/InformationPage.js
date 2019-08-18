import React from "react";
import MainContent from "./MainContent";

class InformationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="info">
          Engineering Career Services and Engineering Council (EXPO) have joined
          forces to host the largest career fairs at the University of Illinois!
        </div>
        <div className="info-facts">
          <div className="location">Activities and Recreation Center (ARC)</div>
          <div className="location">
            201 E Peabody Dr, Champaign, Illinois, 61820
          </div>
          <div className="date">Sept 10 - 11, 2019</div>
          <div className="time">12:00 pm – 6:00 pm</div>
        </div>
        <table class="schedule-table">
          <tr>
            <td>10:00 a.m. – 7:00 p.m.</td>
            <td>
              Shuttle Service from E-14 to ARC <br />
              (Shuttle runs every 10 – 15 minutes)
            </td>
          </tr>
          <tr>
            <td>10:00 a.m. – 1:00 p.m.</td>
            <td>Arrival and Set – Up</td>
          </tr>
          <tr>
            <td>10:00 a.m. – 12:00 p.m.</td>
            <td>Recruiter Lunch</td>
          </tr>
          <tr>
            <td>12:00 p.m. – 6:00 p.m.</td>
            <td>Career Fair Open to Students</td>
          </tr>
          <tr>
            <td>6:00 p.m. – 7:00 p.m.</td>
            <td>
              Tear-Down and Shuttle Service Departures <br />
              (Shuttle runs every 10 – 15 minutes until 7:00 p.m.)
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default InformationPage;

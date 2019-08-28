import React from "react";
import student from "../images/student.png";
import company from "../images/company.png";

function Information() {
  return (
    <div>
      <h1 id="content_header">About</h1>
      <div className="information">
        <div className="info">
          Engineering Career Services and Engineering Employment EXPO have
          joined forces to host the largest career fair at the University of
          Illinois.
        </div>

        <div className="facts_container">
          <div className="fact">
            <img className="icon" src={student}></img>
            <p>
              10,000+
              <br />
              Students
            </p>
          </div>
          <div className="fact">
            <img className="icon" src={company}></img>
            <p>
              400+
              <br />
              Companies
            </p>
          </div>
        </div>

        <div className="table-color">
          <h1 id="content_header">Schedule</h1>
          <div className="temp">
            <table className="schedule-table">
              <tr>
                <td className="sched-time">10:00 a.m. - 7:00 p.m.</td>
                <td>
                  Shuttle Service from E-14 to ARC <br />
                  (Shuttle runs every 10 – 15 minutes)
                </td>
              </tr>
              <tr>
                <td className="sched-time">10:00 a.m. - 1:00 p.m.</td>
                <td>Arrival and Set – Up</td>
              </tr>
              <tr>
                <td className="sched-time">10:00 a.m. - 12:00 p.m.</td>
                <td>Recruiter Lunch</td>
              </tr>
              <tr>
                <td className="sched-time">12:00 p.m. - 6:00 p.m.</td>
                <td>Career Fair Open to Students</td>
              </tr>
              <tr>
                <td className="sched-time">6:00 p.m. - 7:00 p.m.</td>
                <td>
                  Tear-Down and Shuttle Service Departures <br />
                  (Shuttle runs every 10 – 15 minutes until 7:00 p.m.)
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

import React from "react";
import MainContent from "./MainContent";

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="volunteer">
        <h2 id="content_header">Volunteer</h2>
        <div className="info">
          As one of the largest career fairs in the country, it would never be a
          success without the help of hundreds of student volunteers. With that
          said, we need your help! Volunteers are able to connect with
          recruiters before, during, and after the fair, often without standing
          in lines for booths. If you have community service or society point
          requirements to fulfill, volunteering at the career fair is a great
          way to do so! Also, over $500 in gift cards will be raffled off to
          thank student volunteers!
          <br />
          <br />
          <span className="blue">
            Please contact volunteers@illinoisexpo.com with any questions. The
            volunteer sign-up link will be available soon.
          </span>
        </div>
      </div>
    );
  }
}

export default Volunteer;

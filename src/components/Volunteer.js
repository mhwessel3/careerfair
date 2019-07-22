import React from "react";
import MainContent from "./MainContent";

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="volunteerPage">
        <img
          id="volunteerImg"
          src="https://scontent-atl3-1.cdninstagram.com/vp/e3fbfaf2c4c17e44f98430dd6d23f769/5D7D04AA/t51.2885-15/e35/56218141_317838802240624_5626790266933294969_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com"
        />
        <div id="volunteerInfo">
          <h2 id="volunteerText">Volunteering at Expo</h2>
        </div>
      </div>
    );
  }
}

export default Volunteer;

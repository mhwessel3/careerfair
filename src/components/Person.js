import React from "react";
import MainContent from "./MainContent";

class Person extends React.Component {
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
        <p>Morgan Wessel</p>
        <p>Technology Coordinator</p>
        <a
          class="icon alt fa-linkedin"
          href="https://www.linkedin.com/in/morgan-wessel/"
        />
      </div>
    );
  }
}

export default Person;

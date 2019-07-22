import React from "react";
import MainContent from "./MainContent";
import Person from "./Person";

class Committee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="committee">
        <Person />
        <Person />
        <Person />

        <Person />
        <Person />
        <Person />

        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default Committee;

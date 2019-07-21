import React from "react";
import MainContent from "./MainContent";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "Information" };
  }

  handleClick(param) {
    this.setState(state => ({
      activeTab: param
    }));
    console.log(param);
  }

  render() {
    return (
      <div id="main">
        <div className="split left headwrapper">
          <h1>ILLINOIS EXPO</h1>
          <p onClick={this.handleClick.bind(this, "Information")}>
            Information
          </p>
          <p onClick={this.handleClick.bind(this, "InterviewLocations")}>
            Interview Locations
          </p>
          <p onClick={this.handleClick.bind(this, "Volunteer")}>Volunteer</p>
          <p onClick={this.handleClick.bind(this, "Committee")}>Committee</p>
        </div>
        <div className="split right bodywrapper">
          <MainContent type={this.state.activeTab} />
        </div>
      </div>
    );
  }
}

export default Header;

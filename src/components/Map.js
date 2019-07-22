import React from "react";
import MainContent from "./MainContent";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map">
        <img src="https://parking.illinois.edu/-/media/parking/generalmap/campus-parking-map.ashx" />
      </div>
    );
  }
}

export default Map;

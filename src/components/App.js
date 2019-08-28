import React from "react";
import PageHeader from "./PageHeader";
import InterviewLocations from "./InterviewLocations";
import Volunteer from "./Volunteer";
import Information from "./Information";
import Footer from "./Footer";

function App() {
  return (
    <div className="body-content">
      <nav>
        <img src="./images/expo.png"></img>
      </nav>
      <PageHeader />
      <Information />
      <InterviewLocations />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;

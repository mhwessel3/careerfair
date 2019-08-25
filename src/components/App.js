import React from "react";
import PageHeader from "./PageHeader";
import InterviewLocations from "./InterviewLocations";
import Volunteer from "./Volunteer";
import Information from "./Information";
import Footer from "./Footer";

function App() {
  return (
    <div className="body-content">
      <PageHeader />
      <Information />
      <InterviewLocations />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;

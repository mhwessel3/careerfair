import React from "react";
import MainContent from "./MainContent";

class InformationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="information">
        <img
          id="info_img"
          src="https://ssli.ebayimg.com/images/g/v1sAAOSwFdtX0H0T/s-l1600.jpg"
        />
        <p>
          ENGINEERING EMPLOYMENT EXPO AT THE UNIVERSITY OF ILLINOIS AT
          URBANA-CHAMPAIGN IS ONE OF THE LARGEST STUDENT-RUN CAREER FAIRS IN THE
          NATION. WE'RE RECRUITING FOR THE FOLLOWING ACADEMIC YEAR. APPLY NOW AT
          THIS LINK.
        </p>
      </div>
    );
  }
}

export default InformationPage;

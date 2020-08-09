import React from "react";

class Virtual extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="virtual">
        <h2 id="content_header">Virtual Career Fair Information</h2>
        <div className="info">
          This year's career fair will be hosted virtually through CareerEco!
          Below are two tutorials to help you set up your CareerEco account and navigate the website.
        </div>

        <a href="https://students.grainger.illinois.edu/get_file?eid=5a0576fc8170c00f4ddba1f757d56c1d">Tutorial 1</a>
        <a href="https://students.grainger.illinois.edu/get_file?eid=5f5768c65df9fb039f4e929f4f213d29">Tutorial 2</a>


        <div className="info">
          Additionally, EXPO Committee will be hosting TWO Zoom sessions to answer outstanding student questions and offer some advice for success at an online career fair!
          The links to the two sessions are below.
        </div>

        <a href="https://illinois.zoom.us/j/97066238328?pwd=N1Z1UzVZS3dVbStvRTJFdTVVcHJSdz09">August 12th <br/> 6:30 pm CDT</a>
        <a href="https://illinois.zoom.us/j/91061684393?pwd=SHFGaGVOOWdKRXFQWklCQUtnNitJUT09">September 7th <br/>6:30 pm CDT</a>


      </div>
    );
  }
}

export default Virtual;

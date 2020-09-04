import React from "react";

class Virtual extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const alertFunction = () => {alert("Recording for this session will be published after the next live session.\nClick OK to go to the session's slide deck."); }

    return (
      <div className="virtual">
        <h2 id="content_header">Virtual Career Fair Information</h2>
        <div className="info">
          This year's career fair will be hosted virtually through CareerEco!
          Below are two tutorials to help you set up your CareerEco account and navigate the website.
        </div>

        <a href="../tutorials/tutorial1.pdf">Tutorial 1</a>
        <a href="../tutorials/tutorial2.pdf">Tutorial 2</a>


        <div className="info">
          Additionally, EXPO Committee will be hosting TWO Zoom sessions to answer outstanding student questions and offer some advice for success at an online career fair!
          The links to the two sessions are below.
        </div>

        <a href="https://drive.google.com/drive/folders/1enxbwpjI36DPDzeZ7_ZGWycWe_a0FNeH?usp=sharing">August 12th <br/> 6:30 pm CDT</a>
        <a href="https://illinois.zoom.us/s/96150804745">September 7th <br/>6:30 pm CDT</a>


      </div>
    );
  }
}

export default Virtual;

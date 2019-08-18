import React from "react";
import MainContent from "./MainContent";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wave-info">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-top.png"}
                )`
              }}
            />
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-mid.png"}
                )`
              }}
            />
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-bot.png"}
                )`
              }}
            />
          </div>
          <div className="info-facts">
            <div className="main-logo">
              Illinois Engineering <span className="blue">Career Fair</span>
            </div>
            <div className="date-location blue">
              Sept 10 - 11, 2019 | 12:00 pm – 6:00 pm
            </div>
            <div className="date-location blue">
              201 E Peabody Dr, Champaign, Illinois, 61820
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;

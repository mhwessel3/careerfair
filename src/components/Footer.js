import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <img className="uiuclogo" src="./images/uiuc_branding.png" />
      </div>
    );
  }
}

export default Footer;

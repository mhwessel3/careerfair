import React from "react";

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.member.picture);
  }

  render() {
    return (
      <div className="memberCards">
        <div className="member-img-container">
          <img className="member-img" src={this.props.member.picture} />
        </div>
        <div id="member_wrapper">
          <div id="member_text">
            <p id="member_name">{this.props.member.name}</p>
            <p id="member_title">{this.props.member.position}</p>
          </div>
          <a href={this.props.member.linkedin}>
            <img
              id="linkedinImg"
              src="https://image.flaticon.com/icons/png/512/38/38669.png"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Person;

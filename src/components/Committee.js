import React from "react";
import Person from "./Person";

class Committee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var members = [
      {
        name: "Morgan Wessel",
        position: "Technology Coordinator",
        year: "Senior",
        major: "Computer Science & Linguistics",
        linkedin: "https://www.linkedin.com/in/morgan-wessel/",
        picture: "../images/wessel.png"
      },
      {
        name: "Arjun Reddigari",
        position: "Treasurer",
        year: "Sophomore",
        major: "Bioengineering",
        linkedin: "https://www.linkedin.com/in/arjun-reddigari-305a8616b",
        picture: "../images/Reddigari.JPG"
      },
      {
        name: "Maximillian Vittore",
        position: "Internal",
        year: "Senior",
        major: "Mechanical Engineering",
        linkedin: "https://www.linkedin.com/in/max-vittore-597509166/",
        picture: "../images/Vittore.png"
      },
      {
        name: "Gillian Niezyniecki",
        position: "Publicity",
        year: "Sophomore",
        major: "Material Science and Engineering",
        linkedin: "https://www.linkedin.com/in/gillian-niezyniecki-849892168",
        picture: "../images/Niezyniecki.jpg"
      },
      {
        name: "Raj Dave",
        position: "External Outreach Coordinator",
        year: "Junior",
        major: "Aerospace Engineering",
        linkedin: "https://www.linkedin.com/in/raj-dave046",
        picture: "../images/Dave.jpeg"
      },
      {
        name: "David Fernandez Wang",
        position: "Technology Coordinator",
        year: "Junior",
        major: "Computer Science",
        linkedin: "https://www.linkedin.com/in/david-fw",
        picture: "../images/Fernandez-Wang.JPG"
      },
      {
        name: "Courtney Jopes",
        position: "Volunteer Coordinator",
        year: "Sophomore",
        major: "Chemical Engineering",
        linkedin: "https://www.linkedin.com/in/courtney-jopes-37564917b/",
        picture: "../images/Jopes.JPG"
      },
      {
        name: "Shail Desai",
        position: "Logistics",
        year: "Senior",
        major: "Mechanical Engineering",
        linkedin: "",
        picture: ""
      }
    ];

    var membersList = members.map(function(member) {
      return <Person member={member} />;
    });

    return (
      <div>
        <h2 id="content_header">committee</h2>
        <div className="committee">{membersList}</div>
      </div>
    );
  }
}

export default Committee;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fahad Rashid </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br /> <br />
            I have extensive experience of 4 years working with cutting-edge technologies, and I have excellent skills in building a great, user-friendly, interactive, and highly maintainable frontend. <br /> <br />

            I have worked with many clients and worked on several projects, from mainstream to specifically unique and great enterprise-level projects. I have achieved significant milestones and delivered exceptional and remarkable work to all of my clients.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Playing Table Tennis and Badminton
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> &nbsp; Travelling
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Fahad</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

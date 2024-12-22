import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Gopichand Narisetti </span>
            from <span className="purple"> Mangalagiri, India.</span>
            <br />I am currently employed as a{" "}
            <span className="purple">Sr.software developer </span> at Infojini
            with <span className="purple">4 years </span> of IT experience.
            <br />
            I have completed my Bachelor of Technology at Vignan's University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gopichand</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered a passion for coding and have honed my skills over
              the years, building solutions with Python and exploring cloud
              technologies. 👨‍💻
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> Python, REST APIs </b>
              </i>{" "}
              and
              <i>
                <b className="purple"> Flask. </b>
              </i>
              <br />
              <br />
              My interests revolve around developing scalable{" "}
              <i>
                <b className="purple">Web Applications,</b>{" "}
              </i>
              training{" "}
              <i>
                <b className="purple">Machine Learning Algorithms,</b>{" "}
              </i>
              building{" "}
              <i>
                <b className="purple">
                  Microsoft Copilot Studio bots, Power Automate Flows,
                </b>
              </i>{" "}
              creating{" "}
              <i>
                <b className="purple">PowerApps Connectors</b>{" "}
              </i>
              and crafting{" "}
              <i>
                <b className="purple">API solutions</b>
              </i>{" "}
              that streamline business processes.
              <br />
              <br />
              Whenever possible, I apply my knowledge of
              <i>
                <b className="purple"> BitBucket, AWS, Azure Devops </b>
              </i>
              &nbsp;and
              <i>
                <b className="purple"> CI/CD</b>
              </i>{" "}
              to deliver seamless and efficient deployments, ensuring code
              quality and reliability in every project.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GopiChand-N"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gopichand-narisetti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    // Fallback for unsupported browsers
                    const tempInput = document.createElement("input");
                    tempInput.value = "+917989788979"; // Replace with your phone number
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand("copy"); // Use execCommand as a fallback
                    document.body.removeChild(tempInput);
                    alert("Phone number copied to clipboard!");
                  }}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                  className="icon-colour home-social-icons"
                >
                  <IoCall />
                </a>
              </li>

              <li className="social-icons">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    // Fallback for unsupported browsers
                    const tempInput = document.createElement("input");
                    tempInput.value = "gopichand5201@gmail.com"; // Replace with your phone number
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand("copy"); // Use execCommand as a fallback
                    document.body.removeChild(tempInput);
                    alert("Email copied to clipboard!");
                  }}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

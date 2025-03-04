// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

// function Github() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//         Days I <strong className="purple">Code</strong>
//       </h1>
//       <GitHubCalendar
//         username="GopiChand-N"
//         blockSize={15}
//         blockMargin={5}
//         color="#c084f5"
//         fontSize={16}
//       />
//     </Row>
//   );
// }

// export default Github;

import React from "react";
import { Row, Col } from "react-bootstrap";

function Certifications() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <Col xs={12} md={6}>
        <h3 className="certification-header">
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/QHSZ2I5D9IJA"
            target="_blank"
            rel="noreferrer"
            className="certification-link"
          >
            🎖️ Supervised Machine Learning: Regression and Classification
          </a>
        </h3>
        <p>Earned a certificate from Coursera and Stanford University</p>
      </Col>

      <Col xs={12} md={6}>
        <h3 className="certification-header">
          <a
            href="https://www.coursera.org/account/accomplishments/records/55EA981B4RX7"
            target="_blank"
            rel="noreferrer"
            className="certification-link"
          >
            🎖️ Unsupervised Learning, Recommenders, Reinforcement Learning
          </a>
        </h3>
        <p>Earned a certificate from Coursera and Stanford University</p>
      </Col>

      <Col xs={12} md={6}>
        <h3 className="certification-header">
          <a
            href="https://www.coursera.org/account/accomplishments/records/SJ014A57OOHT"
            target="_blank"
            rel="noreferrer"
            className="certification-link"
          >
            🎖️ Advanced Learning Algorithms
          </a>
        </h3>
        <p>Earned a certificate from Coursera and Stanford University</p>
      </Col>

      <Col xs={12} md={6}>
        <h3>🏅 Python Professional Certification</h3>
        <p>
          Passed the professional exam conducted and certified by the OpenEDG
          Python Institute.
        </p>
      </Col>

      <Col xs={12} md={6}>
        <h3>🛠️ DevOps on AWS</h3>
        <p>Completed a DevOps course on Mindluster and earned a certificate.</p>
      </Col>

      <Col xs={12} md={6}>
        <h3>☁️ AWS Cloud Practitioner</h3>
        <p>
          Completed the AWS Cloud Practitioner course and certified by Amazon
          Web Services.
        </p>
      </Col>

      <Col xs={12} md={6}>
        <h3>🔷 Microsoft Azure Fundamentals</h3>
        <p>Completed the Azure Fundamentals course conducted by Microsoft.</p>
      </Col>
    </Row>
  );
}

export default Certifications;

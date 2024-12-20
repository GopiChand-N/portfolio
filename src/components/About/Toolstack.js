import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiOpenai,
  SiPycharm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visualstudiocode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <p>Openai</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p>Pycharm</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

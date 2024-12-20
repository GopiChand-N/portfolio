import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { DiMongodb, DiPython, DiGit, DiDjango } from "react-icons/di";
import {
  SiFlask,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiTensorflow,
} from "react-icons/si";
import { FaAws, FaGitlab, FaLinux } from "react-icons/fa";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiMongodb />
        <p>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <p>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p>Numpy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p>Tensorflow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitlab />
        <p>Gitlab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>Postgresql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
        <p>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzureDevops />
        <p>Azure Devops</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
        <p>Azure</p>
      </Col>
    </Row>
  );
}

export default Techstack;

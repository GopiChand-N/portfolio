import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import machinelearning from "../../Assets/Projects/machinelearning.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="AI Chatbot"
              description="This AI chatbot assists users based on data from specific websites. It uses OpenAI embeddings for numerical representations and ChromaDB to store the data. The model used for this chatbot is 'gpt-4o-mini'."
              ghLink="https://github.com/GopiChand-N/RAG-bot/tree/v1"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machinelearning}
              isBlog={false}
              title="Machine Learning Projects"
              description="I build machine learning models using different algorithms. you can find the step by step code as well. switch the branches for specific type of models."
              ghLink="https://github.com/GopiChand-N/machine-learning-projects/tree/main"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

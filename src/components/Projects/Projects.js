import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Speech Language Recognition System"
              description="Developed a Speech Language Recognition System employing two methodologies. Initially utilized the Google speech recognizer
              library to convert live or recorded audio samples into text, performing language detection using the LangDetect library to identify
              English, Hindi, or Marathi languages. In the second approach, trained a custom deep learning model using MFCC feature extraction
              on a dataset sourced from Kaggle, Google Cloud, NPTEL sites, and various websites, totaling over 110,000 samples per language.
              Implemented RNN and later LSTM networks to address vanishing gradient issues, achieving accuracy rates of 60-70% through 100
              epochs of training. Enhanced functionality included automatic file format conversion, MFCC feature extraction, and probability-based
              language output determination."
              ghLink=""
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chatting Application"
              description="Developed a Speech Language Recognition System employing two methodologies. Initially utilized the Google speech recognizer
              library to convert live or recorded audio samples into text, performing language detection using the LangDetect library to identify
              English, Hindi, or Marathi languages. In the second approach, trained a custom deep learning model using MFCC feature extraction
              on a dataset sourced from Kaggle, Google Cloud, NPTEL sites, and various websites, totaling over 110,000 samples per language.
              Implemented RNN and later LSTM networks to address vanishing gradient issues, achieving accuracy rates of 60-70% through 100
              epochs of training. Enhanced functionality included automatic file format conversion, MFCC feature extraction, and probability-based
              language output determination."
              ghLink=""
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Edtech Website"
              description="Designed and implemented a user-friendly college service platform, enhancing service accessibility with streamlined categorization and 
              provider registration.Pioneered the creation of a user-friendly college service hub, introducing seamless service categorization and empowering 
              providers through a simplified registration process.Mastered ReactJS, Bootstrap, ExpressJS, and MongoDB, coupled with hands-on experience in Proto.io and Adobe 
              Illustrator for a holistic approach to project development "
              ghLink=""
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Electronic Domain Based ChatBot"
              description="Domain-based chatbots (DBC) specialize in interacting with users within a specific field, 
              surpassing generic bots in expertise and efficiency. Deeply trained on domain-specific 
              knowledge, DBCs handle complex queries, offer personalized advice, and automate tasks. 
              Think of a healthcare bot fielding medical questions, a finance bot offering investment 
              advice, or a legal bot guiding through contracts. DBCs enhance customer service, 
              streamline workflows, and empower users. Their effectiveness hinges on targeted 
              knowledge, natural language processing, and ongoing domain-specific training."
              ghLink="https://github.com/avinashraj5/Capstone"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

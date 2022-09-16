import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import doyo from "../../Assets/Projects/doyo.png";
import erp from "../../Assets/Projects/erp.png";
import dawn from "../../Assets/Projects/dawn.png";
import startuptree from "../../Assets/Projects/startuptree.png";
import neufast from "../../Assets/Projects/neufast.png";
import trackhero from "../../Assets/Projects/trackhero.png";
import topsoilsearch from "../../Assets/Projects/topsoilsearch.png";

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
              imgPath={trackhero}
              isBlog={false}
              title="Trackhero"
              description={[
                "A cloud-based platform designed to provide full visibility into your fleet and easy management of your experiential events and customers.",
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Python, Javascript, Django and Reactjs.",
              ]}
              link="https://trackhero.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neufast}
              isBlog={false}
              title="Neufast"
              description={[
                "Neufast is an AI video interviewing company that is addressing the need of discovering competencies, faster and fairer for 10+ language speaking job candidates.",
                "We empower our client with significant cost savings in talent screening while meeting ESG targets for Diversity and Inclusion with Neufast's multi-lingual, AI-powered, gender-neutral talent assessment cloud solution. Neufast's proprietary deep learning models are validated with 91% reliability and 83% accuracy in identifying core competencies and job motivation with over 30,000 video data. Our study shows that top scorers pass forth-fifth rule with no significant adverse effects for gender.",
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Python, Javascript, Django and Reactjs.",
              ]}
              link="https://www.neufast.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startuptree}
              isBlog={false}
              title="Startup Tree"
              description={[
                "StartupTree is the glue that holds our growing entrepreneurial ecosystem together. It helps us make vital connections and keep track of data that is crucial to our decision making.",
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Python, Javascript, Django and Reactjs.",
              ]}
              link="https://www.startuptree.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doyo}
              isBlog={false}
              title="DOYO"
              description={[
                "A food ordering service to make the interaction between customers and restaurants without interfering the waiter that has to take order manually instead it will be an app that facilitate the customers through an app by using the specific QR code displayed on each table. An admin panel for restaurants through which they can manage and deliver food through the portal.",
                "Roles and Resposibilities :",
                "My role was to add localization using Google translate API and store the translations in MySQL database, further utilize it on the public side of website to accommodate the customers to select any given languages for their easier use. A complete design of making an order which has eight screens is implemented for mobile viewers and made the required API’s in flask. Some changes are also made on admin side of frontend of the website. I worked on this project as a full stack developer.",
              ]}
              link="https://app.doyo.ch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="ERP Pack"
              description={[
                "A web-based enterprise-level product that has four key modules.",

                "1. Accounting System",
                "2. Attendance System",
                "3. Purchase Order System",
                "4. Payroll System",

                "The product is versatile in its nature and encompasses all needs of any organization. One can manage problems regarding Finance and Accounts. An organization can manage its attendance and keep tracks of their employees. A Purchase Order system manages all purchase process and keep tracks of all the purchasing goods. Likewise, Payroll system manage everything which has to do with the process of paying employees and filing employment taxes. The Payroll system keeps track of worked hours, calculating wages, withholding taxes and other deductions.",
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Reactjs library.",
              ]}
              link="https://www.erppack.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dawn}
              isBlog={false}
              title="DAWN"
              description={[
                "A service provider between tourists and the owners of house to make the negotiation through the app before coming to the trip so that they can have multiple options to consider and reasonable rent for the stay.",
                "Roles and Resposibilities :",
                "Collaborated with cross functional team to define, design and ship new features using Reactjs library.",
              ]}
              link="https://hiimdawn.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topsoilsearch}
              isBlog={false}
              title="TopSoil Search"
              description={[
                "Roles and Resposibilities :",
                "My role was to collaborate with cross functional team to define, design and ship new features using Django Rest Framework and Angular.",
              ]}
              link="https://topsoilsearch.co.uk/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

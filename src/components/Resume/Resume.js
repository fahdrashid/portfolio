import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assets/Fahad-Rashid1.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    // axios
    //   .get(uri)
    //   .then((res) => {
    //     upadteSpojRank(res.data.message[0].spojRank);
    //     upadteHackerank(res.data.message[1].hackerrank);
    //     upadteCgpa(res.data.message[2].cgpa);
    //     upadateSem(res.data.message[3].sem);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack Developer [TrackHero]"
              date="April 2022 - Present"
              content={[
                "",
              ]}
            />
            <br />
            <br />
            <Resumecontent
              title="Software Engineer [Neufast]"
              date="Jan 2022 - May 2022"
              content={[
                "",
              ]}
            />
            <br />
            <br />
            <Resumecontent
              title="Senior Software Engineer [Virtual Force Inc.]"
              date="August 2021 - Present"
              content={[
                "",
              ]}
            />
            <br />
            <br />

            <Resumecontent
              title="Software Engineer [Codility Solutions]"
              date="October 2019 - August 2021"
              content={[
                "",
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BS Computer Science"
              university="University of Management and Technology [Lahore, Punjab]"
              date="2015 - 2019"
              content={[`CGPA: ${3.69}`]}
            />
            {/* <Resumecontent
              title="12TH BOARD [ODM Public School,Odisha]"
              date="2015 - 2017"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date="2005 - 2015"
              content={["Precentage: 86%"]}
            /> */}
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Resume;

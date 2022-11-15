import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Mepic from "../../Assets/Mepic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Brief Introudction Of Myself
            </h1>
            <p className="home-about-body">
              I am an Applied Mathematics and Economics graduate from the National University Of Singapore
              <br />
              <br />I am fluent in classical programming lanugages like
              <i>
                <b className="purple"> Python, SQL, JavaScript and R </b>
              </i>
              <br />
              <br />
              My field of interest is in analyzing financial datasets and building tools for &nbsp;
              <i>
                <b className="purple">Trading</b> and
                {" "}
                <b className="purple">
                  Portfolio Analytics
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I am a tech enthusiast that is excited to pick up new coding languages/technology skills. Furthermore, I am curious about understanding new financial products/assets and mathematics. 
              Find out more about my past experiences and capabilities today!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Mepic} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/Enduranced"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/spencer-n-7656a897/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href= "mailto:spencer8848@gmail.com?subject='Website'&body=Description"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
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

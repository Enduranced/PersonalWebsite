import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Mepic from "../../Assets/Mepic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About"
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Biref Introudction Of Myself
            </h1>
            <p className="home-about-body">
              I am a Applied Mathematics and Economics graduate
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, SQL, Javascript and R </b>
              </i>
              <br />
              <br />
              My field of interest is in analyzing financial data and building financial infrasturcture &nbsp;
              <i>
                <b className="purple">Quant Trading Strategies </b> and
                {" "}
                <b className="purple">
                  Building Micro-Services for trading activities
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also a tech enthusiast that is excited to pick up new coding languages, teach mathematics and understand new financial products. 
              Find out more about  my past experiences and capabilities. <Link to={About}>here</Link>
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
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sasdaf9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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

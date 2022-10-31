import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import MatrixRain from "../MatrixRain";
import ETF from "../../Assets/Projects/ETF.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Contract from "../../Assets/Projects/Contract.png";
import Telebot from "../../Assets/Projects/Telebot.png";
import Bus from "../../Assets/Projects/Bus.png";
import GameOfLife from "../../Assets/Projects/Game_Of_Life.gif";
import "./projects.css"

import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Projects() {
  return (
    <Container fluid className="project-section">
      <MatrixRain />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="ETF-Strategies">
            <ProjectCard
              imgPath={ETF}
              isBlog={false}
              title="ETF Strategies"
              description="Researched on the concept of market making and purpose of Authorised Participants in the creation and redemption processes, I explored the concept of risk-free arbitrage trading strategies. I recreated the underlying and compared multiple spot ETF, underlying and futures ETF to better understand the deviation among the three. Curious, I examined how corporate events, dividends and introduction of new stocks in the portfolio affects the performance of the ETF and its underlying."
              ghLink=""
              demoLink=""           
            />
          </Col>

          <Col md={4} className="Portfolio">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Merton's Portfolio Problem"
              description="This was my thesis in solving financial-economics. It is focused on reduction of dimensionality required to find the optimal solution of the Merton's portfolio problem at each time via a Forward-Backward Stochastic Differential Equations(FBSDEs). It heavily relies on an algorithmic approach to estimate the parameters and solution."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="SMTP">
            <ProjectCard
              imgPath={Telebot}
              isBlog={false}
              title="SMTP/Telebot"
              description="Designed my own telegram bot to help scrap multiple channels and emails (Simple Mail Transfer Protocol) for key phrases and information of crypto channels to have a daily update on key trading snapshots. This was done via setting up a docker and doing CI/CD controls with github actions."              
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GameOfLife}
              isBlog={false}
              title="Game Of Life"
              description="This was a fun project which I took implmenet from a module, where we explored a mathematical problem of having two states; alive or dead. Every cell interacts with its eight neighbours and through a series of conditions, we determine if a cell is alive or dead in each time step. With several modification to the rules of the game, we have many different beautiful outcomes of patterns."
              ghLink=""
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bus}
              isBlog={false}
              title="Bus Analysis"
              description="This project was done to study the optimal allocation of bus interchanges to be placed in Singapore. Collecting data from the 3 main bus services, we were able to plot the bus routes and bus stops across the island. Applying K-means, GMM-EM and Means Shift Clustering, on the dataset, we were able to identify locations with high density of bus traffic which were prime for bus depots or interchanges."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Contract}
              isBlog={false}
              title="Optimal Premiums contract theory" /* Change this to one line*/
              description="The underlying idea of the paper examines the behaviour between a principal-agent contracting between two entities. Using an Euler-Largragian technique on a dynamic problem(DP), the paper suggests a First Best and Second Best Contracts optimal solution. Furthermore, it analyses the problem and suggests explicit solutions under different utility conditions and incorporation of bequest functions."


            />
          </Col>
        </Row>
      </Container>
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
  );
}

export default Projects;

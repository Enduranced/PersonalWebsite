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
              description="Exporing the space of market making and  purpose of Authorize participants in the creation and redemption processes, I expored the concept of risk-free arbitrage trading strategies. I recreated the underlying and compared multiple spot ETF, underlying and futures ETF to better understand the deviation among the three. Curious, I examined how coporate events, divendeds and introduction of new stocks in the portfolio affects the performance of the ETF and its underlying."
              ghLink=""
              demoLink=""           
            />
          </Col>

          <Col md={4} className="Portfolio">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Merton's Portfolio Problem"
              description="This was my thesis in solving a financial-economics. It is focused on reduction of dimensionality required to find the optimal solution of the Merton's profolio problem at each time via a Foward-Backward Stochastic Differential Equations(FBSDEs). It heavily relies on on an algorithmatic approach to estimate the parameters and solution. Find out more with the full paper below!"
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
              description="This was a fun project that I took in a module, where we explored a mathematical problem of having two states; alive or dead. Every cell interacts with its eight neightbours and through a series of conditions, we determine if a cell is alive or dead in each time step. With several modification to the rules of the game, we have many different beautiful outcomes of patterns."
              ghLink=""
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bus}
              isBlog={false}
              title="Bus Analysis"
              description="This project was done to study the optimal allocation of bus interchanges to be placed in Singapore. Collecting data from the 3 main bus services, we were able to plot the bus routes and busstops across the island. Applying K-means, GMM-EM and Means Shift Clustering, on the dataset, we were able to identify locations with high density of bus traffic which were prime for bus depots or interchanges."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Contract}
              isBlog={false}
              title="Optimal Premiums contract theory" /* Change this to one line*/
              description="The underlying idea of the paper examines the behaviour between a principal-agent contracting between two entities. Using an Euler-Largragian technique on a dynamic problem(DP), the paper suggests a First Best and Second Best Contracts optimal solution. Furthermore, it analyizes the problem and suggests explicit solutions under different utility conditions and incoporation of bequest functions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

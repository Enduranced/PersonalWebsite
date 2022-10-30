import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import MatrixRain from "../MatrixRain";
import Home2 from "./Home2";
import Type from "./Type";

import "./home.css"
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <MatrixRain />
        <Container className="home-content" >

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to my personal website!
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Spencer Ng</strong>
              </h1>

              <div style={{ padding: 5, textAlign: "center" }}>
                <Type />
              </div>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;

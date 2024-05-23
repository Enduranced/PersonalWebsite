import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MatrixRain from "../MatrixRain";

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "./About.css"
//bf212f red color for future
function About() {
  return (
    <Container fluid className="about-section">
      <MatrixRain/>

        <Timeline lineColor={'#ddd'} className='Timeline'>

          <TimelineItem
            key="001"
            dateText="Aug 2022 – Apr 2023"
            dateInnerStyle={{ background: '#0086ff', color: '#00000'}}
            style={{ color: '#0086ff' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              width : '120%'}}>
            <h3 style={{color: '#264b96'}}><strong>Credit Suisse</strong></h3>
            <h4 style={{color: '#264b96'}}>Credit Portfolio Analyst</h4>
            <p className="FirstPara">
              Build and design automation of report generation in python for Portfolio Collateral Concentration for APAC across; Lombard, Structured and Derivative Financing. 
            </p>
            <p>
              Crafted and curated deep dives to monitor high concentration of collaterals of high net-worth Share Back Lending loans.
            </p>
            <p>
              Created and updated China dashboard to gain insights of exposure, collateral information and credit extension for crisis management.
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="Aug 2021 – Dec 2021"
            dateStyle = {{innerHeight: '2rem'}}
            dateInnerStyle={{ background: '#0086ff', color: '#00000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              width : '120%'
            }}
          >
            <h3 style={{ color: '#264b96' }}><strong>Cubist Systematic, Point 72</strong></h3>
            <h4 style={{ color: '#264b96' }}>Data Analyst Intern</h4>
            <p className="FirstPara">
              Data Management: Design and wrote automation scripts for ETL processes in python, database schemas in SQL for datasets Nasdaq IPO, SPACS, JPX and OATS.
            </p>
            <p>
              Research: Identified and compared different statistics of data vendor's dataset on SPAC. Studied the characteristics of the SPAC's lifecycle modelled how it can be traded. Communicated and presented findings to the group. 
            </p>
            <p>
              Monitoring: Used python to check the quality of datasets base on timeliness, accuracy and completeness of each data vendor's dataset. Scheduled data scraping and parsing jobs from different Transfer Protocols. (API, SFTP, SMTP).  
            </p>
          </TimelineItem>
      
          <TimelineItem
            key="003"
            dateText="May 2021 – Aug 2021"
            dateInnerStyle={{ background: '#0086ff', color: '#00000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              width : '120%'
            }}
          >
            <h3 style={{ color: '#264b96' }}><strong>Credit Suisse</strong></h3>
            <h4 style={{ color: '#264b96' }}>Enterprise Risk Management Intern</h4>
            <p className="FirstPara">
              Researched on China Shadow Banking Sector on the different technology firms having digital banking subsidiaries to identify the value of the unsecured debt and 3rd party loan transaction. 
            </p>
            <p>
              Designed and wrote automation scripts and GUI in python to draw data from bloomberg for data analysis and other report generation.
            </p>
            <p>
              Crafted and studied hedge fund concentration risk by identifying the first, second and third order impact through a permutation algorithm and assigning shocks on portfolios and common stock holdings.
            </p>
          </TimelineItem>

          <TimelineItem
            key="004"
            dateText="Aug 2020 – Dec 2020"
            dateInnerStyle={{ background: '#0086ff', color: '#00000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              width : '120%'
            }}
          >
            <h3 style={{ color: '#264b96' }}><strong>SCOR Reinsurance</strong></h3>
            <h4 style={{ color: '#264b96' }}>Pricing Actuary Intern</h4>
            <p className="FirstPara">
              Contributed to the yearly treaty renewal process of short-tail general reinsurance treaties by running internal pricing models to capture tail risks.
            </p>
            <p>
              Sensitivity analysis of threshold levels for different general insurance products line to price them according according to expected loss and premiums received.
            </p>
            <p>
              Designed and created a visual map dashboard of China to understand the different metric values (Sum Assured, Premium, Burning Cost and Duration) from different provinces and performed K-means/GMM clustering methods to understand profitability of business. Enhanced underwriting and pricing capabilities.
            </p>
          </TimelineItem>

          <TimelineItem
            key="005"
            dateText="May 2020 – Aug 2020"
            dateInnerStyle={{ background: '#0086ff', color: '#00000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              width : '120%'
            }}
          >
            <h3 style={{ color: '#264b96' }}><strong>SCOR Reinsurance</strong></h3>
            <h4 style={{ color: '#264b96' }}>Valuation Actuary Intern</h4>
            <p className="FirstPara">
              Understudied the different burning cots, sum assured and premium rates for various life reinsurance treaties. Created sensitivity analysis on premium rates methodology on the different treaties with different riders (Critical Illness, Life Insurance and Personal Accident)
            </p>
            <p>
              Learned internal tool/metrics used in valuation of mortality tables that are used to guide pricing of direct insurance's underwriting processes. 
            </p>
          </TimelineItem>

          <TimelineItem
            key="006"
            dateText="May 2019 – Aug 2019"
            dateInnerStyle={{ background: '#0086ff', color: '#00000'}}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              width : '120%',
            }}
          >
            <h3 style={{ color: '#264b96' }}><strong>Adventoro</strong></h3>
            <h4 style={{ color: '#264b96' }}>Growth Hacker</h4>
            <p className="FirstPara">
              Wrote articles base on SEO framework for online marketing of tour package products using Google and Facebook ads analytics. Perform statistical analysis on click per cost and other websites performance to give potential growth ideas and avenues in different South East Asia markets. 
            </p>
            <p>
              Designed used HTML/JavaScript to create websites for new tour packages for front-end development.
            </p>
          </TimelineItem>
          </Timeline>
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
  );
}



export default About;

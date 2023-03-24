import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with DevOps and Cloud Computing some during my Master Degree program in Data Science were as part
              of a project I was working on, I also needed provision infrastructures in the cloud and deploy the model I built into
              a production environment. Since then I have continued learning and improving myself on DevOps/Cloud Engineering skills.
              Its been a very steep learning curve but I have enjoyed every bit of it.
              <br />
              <br />I am fluent in Programming languages like
              <i>
                <b className="purple"> Python, R, Spark, and a bit of Javascript. </b> and I am very familiar with frameworks like
                <b className="purple"> NodeJS, ExpressJS, ReactJS, and a bit of NextJS. </b>
              </i>
              <br />
              <br />
              My field of Interests: are Building, automating, Provisioning Infrastructures and Deploying new &nbsp;
              <i>
                <b className="purple"> Web Technologies and Products </b> using Technologies like <b className="purple"> AWS, Docker, Kubernetes, Ansible, Prometheous, Jengkins
                  etc </b>
                and I am also very skilled in building data piles using <b className="purple"> Python, Pyspark </b> and ETL tools like <b className="purple"> Talend. </b>

              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for building and deploying machine learning models to solve problems using
              with <b className="purple">Python and Pyspark</b> with
              <i>
                <b className="purple">
                  {" "}
                  Python machine learning Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Flask.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/doutimi3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/doutimi3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dortimiariye-maxwell-angalabiri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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

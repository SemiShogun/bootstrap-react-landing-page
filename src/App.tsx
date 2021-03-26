import "./App.css";
import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import NavBar from "./layouts/NavBar";
import Typewriter from "typewriter-effect/dist/core";
import Footer from "./layouts/Footer";

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      var typewriter = new Typewriter("#description", {
        delay: 65,
      });

      typewriter
        .pauseFor(500)
        .typeString(
          `<span style="color: #008F11">My name is NectoJ.</span> <br/>`
        )
        .pauseFor(300)
        .typeString(
          `<span style="color: #204829">I’m a software developer.</span> <br/>`
        )
        .typeString("<br/>")
        .typeString("<br/>")
        .pauseFor(300)
        .typeString(
          `<span style="color: #008F11">During my free time, I love to develop new things that other people would love to use.</span>`
        )
        .pauseFor(1000)
        .typeString(`<span style="color: #008F11"> ;) </span>`)
        .start();
    }, 2500);
  });

  return (
    <div className="App">
      {/* <div className="logo-background"></div> */}
      <NavBar />
      <div className="spacing">
        <Container fluid>
          <div id="home">
            <Row className="d-flex justify-content-end align-items-center">
              <Col
                lg={6}
                md={6}
                sm={10}
                className="d-flex justify-content-center"
              >
                <img
                  id="myself"
                  className="img-fluid"
                  src="/images/myself.png"
                  alt="myself"
                />
              </Col>
              <Col
                lg={6}
                md={6}
                sm={0}
                className="d-flex justify-content-start align-items-center"
              >
                <div id="description"></div>
              </Col>
            </Row>
          </div>
          <div id="about">
            <Row className="d-flex justify-content-center">
              <Col
                lg={6}
                md={6}
                sm={10}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <h1>About</h1>
                <span id="about-text">
                  Hello everyone! NectoJ here. I’m a developer from the snowy
                  alps of Zürich, Switzerland. I have a fond interest when it
                  comes to learning programming, technologies, tools and
                  especially JS/TS frameworks. You’ll discover some of my
                  various blog posts on this website regarding my current
                  projects, ideas, reviews, writings, et cetera.
                </span>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={0}
                className="d-flex justify-content-start"
              ></Col>
            </Row>
          </div>
          <div id="projects">
            <Row className="d-flex justify-content-center">
              <Col
                lg={6}
                md={6}
                sm={10}
                className="d-flex justify-content-start"
              ></Col>
              <Col
                lg={6}
                md={6}
                sm={0}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <h1>Projects</h1>
                <span id="about-text">
                  I'm currently undertaking multiple projects which you can find
                  in my Github account. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </span>
              </Col>
            </Row>
          </div>
          <div id="blog">
            <Row className="d-flex justify-content-center">
              <Col
                lg={12}
                md={12}
                sm={12}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <h1>Blog</h1>
                <span id="about-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </Col>
            </Row>
          </div>
          <div id="contact">
            <Row className="d-flex justify-content-center">
              <Col
                lg={12}
                md={12}
                sm={12}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <h1>Contact</h1>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      I'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                  </Form.Group>
                  <Form.Group controlId="controlTextarea1">
                    <Form.Label>Contents</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;

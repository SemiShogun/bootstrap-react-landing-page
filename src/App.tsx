import "./App.css";
import "./HoverEffect.css";
import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Image,
  CardImg,
  Carousel,
} from "react-bootstrap";
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
          `<span style="color: #008F11">During my free time, I love to develop new things.</span>`
        )
        .pauseFor(1000)
        .typeString(`<span style="color: #008F11"> ;) </span>`)
        .start();
    }, 2500);
  });

  interface imageContents {
    title: string;
    img: string;
    description: string;
  }

  const images: imageContents[] = Array(
    {
      title: "About.jpg",
      img: "/images/about_updated.jpg",
      description: "F-Stop: f/1.8, Exposure Time: 1/25 sec, ISO: ISO-200",
    },
    {
      title: "Flower.jpg",
      img: "/images/flower.jpg",
      description: "F-Stop: f/3.2, Exposure Time: 1/320 sec, ISO-200",
    },
    {
      title: "Boat.jpg",
      img: "/images/boat_updated.jpg",
      description: "F-Stop: f/1.8, Exposure Time: 1/4000 sec, ISO-200",
    },
    {
      title: "Bee.jpg",
      img: "/images/Bee_updated.jpg",
      description: "F-Stop: f/2.8, Exposure Time: 1/250 sec, ISO-200",
    },
    {
      title: "Myself.jpg",
      img: "/images/myself.png",
      description: "F-Stop: f/3.2, Exposure Time: 1/250 sec, ISO-50",
    },
    {
      title: "Train.jpg",
      img: "/images/train_updated.jpg",
      description: "F-Stop: f/2.2, Exposure Time: 1/1250 sec, ISO-200",
    },
    {
      title: "ferry.jpg",
      img: "/images/ferry_updated.jpg",
      description: "F-Stop: f/9, Exposure Time: 1/320 sec, ISO-400",
    },
    {
      title: "tower_1.jpg",
      img: "/images/tower_1_updated.jpg",
      description: "F-Stop: f/9, Exposure Time: 1/125 sec, ISO-200",
    },
    {
      title: "tower_2.jpg",
      img: "/images/tower_2_updated.jpg",
      description: "F-Stop: f/6.3, Exposure Time: 1/125 sec, ISO-320",
    }
  );

  return (
    <div className="App">
      <NavBar />
      <div className="spacing">
        <Container fluid>
          <div id="home">
            <Row className="d-flex justify-content-end align-items-center row-spacing">
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex justify-content-center"
              >
                <img
                  id="myself"
                  className="img-fluid"
                  src="/images/introduction_updated.jpg"
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
            <Row className="d-flex justify-content-center row-spacing">
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
              >
                <img
                  className="img-fluid"
                  src="/images/myself.png"
                  alt="Myself"
                />{" "}
              </Col>
            </Row>
          </div>
          <div id="projects">
            <Row className="d-flex justify-content-center row-spacing">
              <Col
                lg={6}
                md={6}
                sm={10}
                className="d-flex justify-content-start"
              >
                <img
                  className="img-fluid"
                  src="/images/about_updated.jpg"
                  alt="About Myself"
                />{" "}
              </Col>
              <Col
                lg={6}
                md={6}
                sm={0}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <h1>Projects</h1>
                <span id="about-text">
                  I'm currently undertaking multiple projects which you can find
                  on my Github account.
                </span>
              </Col>
            </Row>
          </div>
          <div id="blog">
            <Row className="d-flex justify-content-center row-spacing">
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
          <div id="gallery">
            <Row className="d-flex justify-content-start align-items-center row-spacing">
              <Col sm={12} md={12} lg={12}>
                <h1>Gallery</h1>
              </Col>
              {images.map((image: imageContents) => (
                <Col sm={4} md={4} lg={4}>
                  <div className="hovereffect gallery-item">
                    <div className="d-flex justify-content-center">
                      <p className="gallery-title">{image.title}</p>
                      <p className="gallery-text">{image.description}</p>
                    </div>
                    <img src={image.img} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div id="carousel">
            <Row className="d-flex justify-content-center align-items-center row-spacing">
              <Col sm={12} md={12} lg={12}>
                <h1>Carousel</h1>
              </Col>
              <Col sm={6} md={6} lg={6} className="carousel">
                <Carousel>
                  {images.map((image: imageContents) => (
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carousel-item"
                        src={image.img}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </div>
          <div id="explanation">
            <Row className="d-flex justify-content-start row-spacing">
              <Col sm={12} md={12} lg={12}>
                <h1>Explanation</h1>
                <p>
                  All of the images in this site have been edited with
                  photoshop.
                  <br />
                  Icons are all made with SVG.
                  <br />
                  Images are made with JPG.
                  <br />
                  Favicon is a GIF.
                  <br />
                  Methods I've used: Golden Ratio, Rule of Thirds, Aperture,
                  Shutter Speed, ISO I've used Photoshop to manipulate the
                  picture into making it look a bit nicer.
                </p>
              </Col>
            </Row>
          </div>
          <div id="contact">
            <Row className="d-flex justify-content-center row-spacing">
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

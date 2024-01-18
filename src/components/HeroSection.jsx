import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container className='hero-section-container'>
      <Row className='h-100'>
        <Col
          xs
          md='8'
          className='d-flex flex-column justify-content-center text-start px-4'>
          <div className='mx-4'>
            <h1>Portfolio and projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ipsam harum velit, sapiente illum ullam sint rerum
              enim, vitae rem fuga numquam eos excepturi aliquid.
            </p>
          </div>
          <div className='btns-wrapper'>
            <a href='/'>Blogg</a>
            <Button variant='secondary'>Learn More</Button>
          </div>
        </Col>
        <Col xs md='4'>
          <div className='img-wrapper'></div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;

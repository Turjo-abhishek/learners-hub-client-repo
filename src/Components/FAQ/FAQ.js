import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <Container className="my-5">
      <Row>
        <h2 className="text-center text-danger fs-2 fw-bolder mb-4">Frequently Asked Questions</h2>
        <Col lg="6">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Do I have access to these videos after the course?</Accordion.Header>
              <Accordion.Body>
                We have made this tutorials in such a way that once you access to this course, you can have lifetime access to this videos. You can watch this videos from your registered device anytime you want.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>From how many devices can we log in to?</Accordion.Header>
              <Accordion.Body>
                As we have tried to make this course safe and secure, so we have provided access to two devices only. In case you lose your device, you can contact with us.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg="6">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Will the courses take more time than mentioned?</Accordion.Header>
              <Accordion.Body>
                Generally, the course is strictly scheduled. But we have tried to be student friendly. So to support the students, if any unavoidable circumstances occur than the schedule might change a bit. But be assured, it won't differ much.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I screen record the videos?</Accordion.Header>
              <Accordion.Body>
                Well, you may try to do that. But you can't because whenever you'll try to record or share the screen, it'll automatically become blank. So due to copyright acts, your answer is "NO.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;

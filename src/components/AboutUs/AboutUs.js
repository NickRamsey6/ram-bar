import React from 'react';
import './AboutUs.css';
import SiteCarousel from '../SiteCarousel';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="py-3">
        <Row>
          <Col md={6}>
            <h1>Our Bar is Our Family</h1>
            <p>
              Lorem IpsumWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutUs;

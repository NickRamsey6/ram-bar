import React from 'react';
import './HomeHeading.css';
import { Container, Row, Col } from 'reactstrap';

class HomeHeading extends React.Component {
  render() {
    return (
      <section id="home-heading" className="p-5">
        <div className="dark-overlay">
          <Row>
            <Col>
              <Container className="pt-4">
                <h1>It's Always 5 O'Clock On The Patio!</h1>
                <p>The only bar in town that won't kick you out at 2 AM!</p>
              </Container>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default HomeHeading;

import React from 'react';
import './HomeIcons.css';
import { Container, Row, Col } from 'reactstrap';

class HomeIcons extends React.Component {
  render() {
    return (
      <div className="py-5">
        <Container>
          <Row>
            <Col className="col-md-4 mb-4 text-center">
              <i class="fa fa-glass fa-3x mb-2"></i>
              <h3>Drinks</h3>
              <p>lorem ajhfals elsjadfhalsd</p>
            </Col>
            <Col className="col-md-4 mb-4 text-center">
              <i class="fas fa-bowling-ball fa-3x mb-2"></i>
              <h3>Games</h3>
              <p>lorem ajhfals elsjadfhalsd</p>
            </Col>
            <Col className="col-md-4 mb-4 text-center">
              <i class="fas fa-heart fa-3x mb-2"></i>
              <h3>Family</h3>
              <p>lorem ajhfals elsjadfhalsd</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeIcons;

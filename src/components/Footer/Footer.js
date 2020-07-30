import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer id="main-footer" class="text-center p-4">
        <Container>
          <Row>
            <Col>
              <h6>Ram Bar is a subsidiary of RamFam Holdings LLC</h6>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;

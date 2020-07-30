import React from 'react';
import './HomeIcons.css';
import { Container, Row, Col } from 'reactstrap';

class HomeIcons extends React.Component {
  render() {
    return (
      <div className="py-5">
        <Container>
          <Row>
            <Col className="mb-4text-center" md={{ size: 4 }}>
              <i class="fa fa-glass fa-3x mb-2"></i>
              <h3>Drinks</h3>
              <p>
                A meticulously curated menu of cocktails, beers and wines. Be
                sure to ask Mary for the drink of the day!
              </p>
            </Col>
            <Col className="mb-4text-center" md={{ size: 4 }}>
              <i class="fas fa-bowling-ball fa-3x mb-2"></i>
              <h3>Games</h3>
              <p>
                Classic bar games like Darts and Cornhole, paired with new spins
                on old favorites like Backyard Bowling and Dart Poker.
              </p>
            </Col>
            <Col className="mb-4text-center" md={{ size: 4 }}>
              <i class="fas fa-heart fa-3x mb-2"></i>
              <h3>Family</h3>
              <p>
                We're partying every summer weekend. All are welcome and all are
                treated like a member of the Ram Fam!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeIcons;

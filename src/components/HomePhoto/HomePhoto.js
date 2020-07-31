import React from 'react';
import './HomePhoto.css';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import homeImage from '../../assets/images/bg-no-text.png';

class HomePhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron
          className="jumbo"
          fluid
          style={{
            background: `url(${homeImage})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <Container fluid>
            <Row
            //   style={{
            //     // background: 'none !important',
            //     backgroundImage: `url(${homeImage})`,
            //     backgroundAttachment: 'fixed',
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //   }}
            >
              <Col md={8} className="m-auto">
                <h1
                  style={{
                    fontFamily: 'Engravers MT',
                    fontSize: '100px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Ram Bar
                </h1>

                <h2
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    borderBottom: '8px solid #fff',
                    lineHeight: '0em',
                    margin: '50px 0 50px',
                  }}
                >
                  <span
                    style={{
                      background: '#fff',
                      padding: '0 10px',
                      fontFamily: 'Freestyle Script',
                      fontSize: '45px',
                      fontWeight: 'bold',
                    }}
                  >
                    Est. 2020
                  </span>
                </h2>
                <p
                  style={{
                    fontFamily: 'Freestyle Script',
                    color: 'white',
                    fontSize: '75px',
                    fontWeight: 'bold',
                  }}
                >
                  Proudly Serving Whatever You Bring!
                </p>
              </Col>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p> */}
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

// #page-header {
//     height: 200px;
//     background: url('../img/image1.jpg');
//     background-position: 0 -360px;
//     background-attachment: fixed;
//     color: #fff;
//     border-bottom: 1px #eee solid;
//     padding-top: 50px;
//   }

export default HomePhoto;

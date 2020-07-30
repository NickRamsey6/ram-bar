import React from 'react';
import './PhotoGallery.css';
import { Container, Row, Col } from 'reactstrap';
import drinks from '../../assets/images/Drinks.JPG';
import about2 from '../../assets/images/about2.jpg';
import about3 from '../../assets/images/about3.jpg';
import darts from '../../assets/images/Darts.JPG';
import tv from '../../assets/images/TV.JPG';
import about5 from '../../assets/images/about5.jpg';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [drinks, about2, about3, darts, tv, about5];

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  toggle() {
    // console.log(this);
    this.setState({
      isOpen: !this.state.isOpen,

      //   photoIndex: images.indexOf(this.src),
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <Container className="py-5">
        <h1 className="text-center">Photo Gallery</h1>
        <p className="text-center">Good times @RamBar!</p>
        <Row className="mb-4">
          <Col className="md-4">
            <img
              className="img-fluid"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              src={drinks}
              style={{ height: '350px', width: '600px' }}
            />
          </Col>
          <Col className="md-4">
            <img
              className="img-fluid"
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              src={about2}
              style={{ height: '350px', width: '600px' }}
            />
          </Col>
          <Col className="md-4">
            <img
              className="img-fluid"
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
              src={about3}
              style={{ height: '350px', width: '600px' }}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="md-4">
            <img
              className="img-fluid"
              onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
              src={darts}
              style={{ height: '350px', width: '600px' }}
            />
          </Col>
          <Col className="md-4">
            <img
              className="img-fluid"
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
              src={tv}
              style={{ height: '350px', width: '600px' }}
            />
          </Col>
          <Col className="md-4">
            <img
              className="img-fluid"
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
              src={about5}
              style={{ height: '350px', width: '600px' }}
            />

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex - 1) % images.length]}
                onCloseRequest={this.toggle}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PhotoGallery;

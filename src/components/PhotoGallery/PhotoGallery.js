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
    this.setState({
      isOpen: !this.state.isOpen,
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
            <img className="img-fluid" onClick={this.toggle} src={drinks} />
          </Col>
          <Col className="md-4">
            <img className="img-fluid" onClick={this.toggle} src={about2} />
          </Col>
          <Col className="md-4">
            <img className="img-fluid" onClick={this.toggle} src={about3} />
          </Col>
          <Col className="md-4">
            <img className="img-fluid" onClick={this.toggle} src={darts} />
          </Col>
          <Col className="md-4">
            <img className="img-fluid" onClick={this.toggle} src={tv} />
          </Col>
          <Col className="md-4">
            <img className="img-fluid" onClick={this.toggle} src={about5} />
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

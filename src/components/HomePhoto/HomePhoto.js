import React from 'react';
import './HomePhoto.css';
import { Container, Jumbotron } from 'reactstrap';
import homeImage from '../../assets/images/RamBar.png';

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
            backgroundSize: 'auto',
          }}
        >
          <Container fluid></Container>
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

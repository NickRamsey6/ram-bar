import React from 'react';
import './Home.css';
import homeImage from '../../assets/images/RamBar.png';
import HomeIcons from '../HomeIcons';
import HomeHeading from '../HomeHeading';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          className="homeBackground"
          src={homeImage}
          alt="home page background"
        />
        <h2>The World's Greatest Backyard Bar</h2>
        <HomeIcons />
        <HomeHeading />
      </div>
    );
  }
}

export default Home;

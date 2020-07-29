import React from 'react';
import './Home.css';
import homeImage from '../../assets/images/RamBar.png';
import HomeIcons from '../HomeIcons';

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
      </div>
    );
  }
}

export default Home;

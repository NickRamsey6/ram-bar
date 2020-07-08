import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <div className="App">
          <TopNav />
            <div className="content-area">
              <Route exact path='/' component = {Home} />
            </div>
            <Footer />
        </div>
      </Router>
    )
  }
}



export default App;

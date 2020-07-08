import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNav from './components/TopNav';

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
              <p>Home page Here!!!</p>
            </div>
        </div>
      </Router>
    )
  }
}



export default App;

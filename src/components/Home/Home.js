import React from 'react';
import './Home.css';
import homeImage from '../../assets/images/Picture2.png';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img className = "homeBackground" src = {homeImage} alt = 'home page background'/>
            </div>
        )
    }
}

export default Home;
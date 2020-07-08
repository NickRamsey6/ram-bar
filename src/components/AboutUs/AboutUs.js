import React from 'react';
import './AboutUs.css';
import SiteCarousel from '../SiteCarousel';

class AboutUs extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>About Ram Bar</h1>
                <SiteCarousel />
                <p>Lorem Ipsum</p>
            </div>
        );
    }
}

export default AboutUs;
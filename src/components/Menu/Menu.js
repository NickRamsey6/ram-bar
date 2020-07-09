import React from 'react';
import './Menu.css';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle,CardSubtitle, NavLink, CardGroup } from 'reactstrap';
import titosTea from '../../assets/images/Titos-Tea.jpg';
import oldFashioned from '../../assets/images/Old-Fashioned.jpg';
import greyhound from '../../assets/images/Greyhound.jpg';

class Menu extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(<div>
            <h2>Cocktails</h2>
            <CardGroup>
                <Card>
                    <CardImg top width="100%" src = {titosTea} alt = "tito's tea" />
                    <CardBody>
                        <CardTitle>Tito's Tea</CardTitle>
                        <CardText>3oz Tea, 3oz Lemonade, 1.5oz Tito's Vodka</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src = {oldFashioned} alt = "old fashioned" />
                    <CardBody>
                        <CardTitle>Old Fashioned</CardTitle>
                        <CardText>4oz Bourbon, 2oz Sweet Vermouth, 5 drops Woodord Reserves Bitters, 2 Marashino Cheeries</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src = {greyhound} alt = "greyhound" />
                    <CardBody>
                        <CardTitle>The Greyhound</CardTitle>
                        <CardText>1-2oz Vodka, grapefruit juice</CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>)
    }
}

export default Menu;
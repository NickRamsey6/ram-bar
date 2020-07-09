import React from 'react';
import './TopNav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import {Link} from 'react-router-dom';

class TopNav extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return(<div>
            <Navbar color="light" light expand="md">
                <NavbarBrand style={{fontWeight: "bold"}} href='/'>Ram Bar</NavbarBrand>
                    <Nav className="ml-auto" navbar >
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/about-us'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/menu'>Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/games'>Games</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/partners'>Partners</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>);
    }
}

export default TopNav;
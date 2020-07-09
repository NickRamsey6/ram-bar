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
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/'><i class="fas fa-home"></i> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/about-us'><i class="fas fa-at"></i> About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/menu'><i class="fas fa-glass-cheers"></i> Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/games'><i class="fas fa-dice"></i> Games</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black', fontWeight: "bold"}} href='/partners'><i class="far fa-handshake"></i> Partners</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>);
    }
}

export default TopNav;
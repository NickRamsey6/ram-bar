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
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" sticky={'top'}>
        <NavbarBrand style={{ fontWeight: 'bold' }} href="/">
          Ram Bar
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: 'white' }} href="/">
                <i class="fas fa-home"></i> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white' }} href="/about-us">
                <i class="fas fa-at"></i> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white' }} href="/menu">
                <i class="fas fa-glass-cheers"></i> Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white' }} href="/games">
                <i class="fas fa-dice"></i> Games
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white' }} href="/partners">
                <i class="far fa-handshake"></i> Partners
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopNav;

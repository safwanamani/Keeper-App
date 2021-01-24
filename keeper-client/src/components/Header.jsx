import React from 'react';
import './css/header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import BorderColorIcon from '@material-ui/icons/BorderColor';

function Header() {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <BorderColorIcon /> {""}
                    Keeper App
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/notes" className="nav-link">Notes</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )
}

export default Header;
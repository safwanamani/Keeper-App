import React from 'react';
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
              <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )
}

export default Header;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar>
                <Navbar.Brand href="/">Keeper App</Navbar.Brand>
                <Nav.Link href="/notes">Notes</Nav.Link>
            </Navbar>
        </header>
    )
}

export default Header;
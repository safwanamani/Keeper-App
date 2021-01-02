import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import BorderColorIcon from '@material-ui/icons/BorderColor';

function Header() {
    return (
        <header>
            <Navbar>
                <Navbar.Brand href="/">
                    <BorderColorIcon /> {""}
                    Keeper App
                </Navbar.Brand>
                <Nav.Link href="/notes">Notes</Nav.Link>
            </Navbar>
        </header>
    )
}

export default Header;
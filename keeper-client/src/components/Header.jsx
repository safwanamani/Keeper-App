import React from 'react';
import './css/header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import BorderColorIcon from '@material-ui/icons/BorderColor';

function Header() {
  return (
  //   <section className="main-header">
  //     <nav class="navbar navbar-expand-xl navbar-dark py-sm-2 py-1">
  //   <div class="container">
  //     <a class="navbar-brand" href="index.html">Keeper App</a>
  //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon fa fa-bars"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul class="navbar-nav ml-auto">
  //         <li class="nav-item">
  //           <a class="nav-link" href="index.html">Notes <span class="sr-only">(current)</span></a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  //   </section>
    <>
      <header>
        <Navbar expand="lg" >
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
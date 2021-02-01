import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import '../App.css'
function Header() {

        return (
            <>
  <Navbar expand="lg" className="headerItems">
  <Navbar.Brand>
      <img className="logo" src={('http://pakkapapita.com/servis/wp-content/uploads/2017/09/servis-logo-resized.png')}/>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="noul">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Browse Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
       </NavDropdown>
      
      <Nav.Link>Find a Store</Nav.Link>

    </Nav>
    <Nav>
    <Navbar.Brand><img className="logobg" src={('http://pakkapapita.com/servis/wp-content/uploads/2017/09/servis-logo-resized.png')}/></Navbar.Brand>
    </Nav>
    <Nav className="noul2">
    <Nav.Link>About Us</Nav.Link>
    <Nav.Link>Contact Us</Nav.Link>
    <Nav.Link><SearchIcon/></Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>
               <div className="headLine"></div>
            </>
    )
}

export default Header

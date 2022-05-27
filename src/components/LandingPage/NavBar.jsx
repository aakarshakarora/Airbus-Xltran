import React, {useState} from 'react';
import { Link } from 'react-scroll'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {logout} from "../../firebase";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)

  return (
    <>
    <Navbar sticky="top" className='bg-[#4f46e5]' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='font-bold'><Link to="home" smooth={true} duration={500}><span className='h1'>Xltran</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="home" smooth={true} duration={500}><span className='h5'>Home</span></Link></Nav.Link>
            <Nav.Link><Link to="about" smooth={true} offset={-200} duration={500}><span className='h5'>About</span></Link></Nav.Link>
            <Nav.Link><Link to="build" smooth={true} offset={-50} duration={500}><span className='h5'>Build</span></Link></Nav.Link>
            <button className="dashboard__btn" onClick={logout}>
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;

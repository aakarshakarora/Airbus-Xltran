import React from 'react';
import { Link } from 'react-scroll'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { logout } from "../../firebase";

const NavBar = () => {
	return (
		<>
			<Navbar sticky="top" className='bg-[#4f46e5]' variant="dark" expand="lg">
				<Container>
					<Navbar.Brand className='font-bold'><Link to="home" smooth={true} duration={500}><span className='h1'>Xltran</span></Link></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Container className="justify-content-center">
							<Nav className="me-auto">
								<Nav.Link><Link to="home" smooth={true} duration={500}><span className='h5'>Home</span></Link></Nav.Link>
								<Nav.Link><Link to="about" smooth={true} offset={-200} duration={500}><span className='h5'>About</span></Link></Nav.Link>
								<Nav.Link><Link to="build" smooth={true} offset={-50} duration={500}><span className='h5'>Build</span></Link></Nav.Link>
							</Nav>
						</Container>
						<div className="flex justify-content-center">
							<Button variant="danger" onClick={logout}>Logout</Button>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;

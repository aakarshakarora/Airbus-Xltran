import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { logout } from "../../firebase";

const NavBar = () => {
	return (
		<>
			<Navbar sticky="top" className='bg-[#4f46e5]' variant="dark" expand="lg">
				<Container className="justify-content-center">
					<Navbar.Brand className='font-bold'><Link to="/dashboard" ><span className='h1'>Xltran</span></Link></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;

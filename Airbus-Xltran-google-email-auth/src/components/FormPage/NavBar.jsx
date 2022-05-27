import React from 'react';
import { Link } from 'react-scroll'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { logout } from "../../firebase";

const NavBar = () => {
	return (
		<>
			<Navbar sticky="top" className='bg-[#4f46e5]' variant="dark" expand="lg">
				<Container>
					<Navbar.Brand className='font-bold'><Link to="/dashboard" smooth={true} duration={500}><span className='h1'>Xltran</span></Link></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Container className="justify-content-end">
							<Nav className="me-auto">
								<Button variant="danger" onClick={logout}>Logout</Button>
							</Nav>
						</Container>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;

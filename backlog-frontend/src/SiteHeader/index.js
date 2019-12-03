import React from 'react';
import { Navbar, NavDropdown, Form, FormControl, Col } from 'react-bootstrap';

function SiteHeader(){
	return(
		<Navbar sticky="top" variant="dark" bg='dark'>	
			<Col>
				<Navbar.Brand>Backlog</Navbar.Brand>
			</Col>
			<Col xs={8}>
				<Form inline>
					<FormControl type="text" placeholder="Search" className='searchBar'/>
				</Form>
			</Col>
			<Col>
				<NavDropdown id="basic-nav-dropdown" className='headerDropDown'>
					<NavDropdown.Item>Profile</NavDropdown.Item>
					<NavDropdown.Item>Backlog</NavDropdown.Item>
					<NavDropdown.Item>Completed Games</NavDropdown.Item>
				</NavDropdown>
			</Col>			
		</Navbar>
	)
}

export default SiteHeader;
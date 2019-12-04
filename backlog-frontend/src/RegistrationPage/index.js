import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RegistrationPage extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return(
			<Form>
				<Form.Group>
					<Form.Label>Display Name</Form.Label>
					<Form.Control name='displayName' onChange={this.handleChange} type='text' placeholder='Enter Display Name'/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Email address</Form.Label>
					<Form.Control name='email' onChange={this.handleChange} type='email' placeholder='Enter email'/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control name='password' onChange={this.handleChange}  type='password' placeholder='Password'/>
				</Form.Group>
				<Button onClick={this.handleSubmit}variant='primary' type='submit'>Submit</Button>
			</Form>
		)
	}
}

export default RegistrationPage;
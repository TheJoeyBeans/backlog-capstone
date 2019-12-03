import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function GameSearchResults(props){

	return (
		<Modal show={props.open}>
			<Modal.Body>hey</Modal.Body>
			<Button onClick={props.close}>close</Button>
		</Modal>
	)
}


export default GameSearchResults;
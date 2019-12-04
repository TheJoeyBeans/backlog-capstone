import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

function GameSearchResults(props){
	const gameItem = props.gameResults.map((game) =>{
		return(
			<Row key={game.id}>
				<Col>
					<Image src={game.pic} thumbnail/>
				</Col>
				<Col>
					<h3>{game.title}</h3>
				</Col>
			</Row>
		)
	});
	return (
		<Container>
			{gameItem}
		</Container>
	)
}


export default GameSearchResults;
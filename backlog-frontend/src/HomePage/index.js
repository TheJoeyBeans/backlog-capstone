import React, { Component } from 'react';
import SiteHeader from '../SiteHeader';
import axios from 'axios';

class HomePage extends Component {
	constructor(){
		super();

		this.state = {
			foundGames: [],
			showGameResults: false
		}
	}

	fetchGameResults = (query) => {
		const searchUrl = `https://api.rawg.io/api/games?search=${query}&page_size=10`;
		axios.get(searchUrl, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response =>{
			const foundResults = response.data.results;
			for(let i = 1; i < foundResults.length; i++){
				const gameTitle = foundResults[i].name;
				const gamePic = foundResults[i].background_image;
				const gameId = foundResults[i].id;

				this.setState(state=>{
					const foundGames = state.foundGames.concat({
						title: gameTitle,
						pic: gamePic,
						id: gameId
					});
					return{
						foundGames
					}
				})
			}
		})
		this.setState({
			searchQuery: ''
		})
	}
	render(){
		return(
			<div>
				<SiteHeader search={this.handleQuery} fetchResults={this.fetchGameResults}/>
				<p>Hey</p>
			</div>
		)
	}
}

export default HomePage;
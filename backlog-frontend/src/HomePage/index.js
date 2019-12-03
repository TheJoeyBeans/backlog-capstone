import React, { Component } from 'react';
import SiteHeader from '../SiteHeader';
import axios from 'axios';

class HomePage extends Component {
	constructor(){
		super();

	}

	fetchGameResults = (query) => {
		const searchUrl = `https://api.rawg.io/api/games?search=${query}&page_size=5`;
		axios.get(searchUrl, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response =>{
			console.log(response)
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
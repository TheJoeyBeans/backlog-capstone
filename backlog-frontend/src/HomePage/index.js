import React, { Component } from 'react';
import SiteHeader from '../SiteHeader';

class HomePage extends Component {
	constructor(){
		super();	
	}

	render(){
		return(
			<div>
				<SiteHeader />
				<p>Hey</p>
			</div>
		)
	}
}

export default HomePage;
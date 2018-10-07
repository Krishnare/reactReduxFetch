import React, { Component } from 'react';

class bookCard extends Component {

	render(){

		return(
		<div>
	        <img style={{width: 250, height: 323}} src={this.props.stateProps.cover} />
	        <h2>{this.props.stateProps.title}</h2>
	        <h3>{this.props.stateProps.author}</h3>
	        <a href={this.props.stateProps.link}>{this.props.stateProps.link}</a>
      </div>
		)
	}
}

export default bookCard;
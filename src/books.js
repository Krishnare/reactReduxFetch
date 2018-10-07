import React, { Component } from 'react';
import BookCard from './booksCard/bookCard';

class Books extends Component {

	render(){
		const stateProps = this.props.store.getState();
		const bookItems = stateProps.books.map((book) =>
				  <BookCard key = { book } stateProps = { stateProps } />
			  );
		console.log(stateProps)
		return(
			<div>
				{bookItems}
			</div>
		)
	}
}

export default Books;
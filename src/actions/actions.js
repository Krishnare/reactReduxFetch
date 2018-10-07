import React from 'react';
import ReactDOM from 'react-dom';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

let fetchValues = () => {
	return dispatch => {
		return fetch('https://api.myjson.com/bins/1hfphw')
		.then()
		.then(res => res.json())
		.then(json => {
			despatch(fetchProductsSuccess(json));
			return json;
		})
	}
	
}
fetchValues();

export const fetchProductsSuccess = json => {
	return {
		type: RECEIVE_POSTS,
		posts: json
	}
}

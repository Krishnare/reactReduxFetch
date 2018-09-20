import React from 'react';
import ReactDOM from 'react-dom';

fetchValues() {
	return fetch('https://api.myjson.com/bins/1hfphw')
	.then(handleErrors)
	.then(res => res.json())
	.then(json => {
		despatch(fetchProductsSuccess(json))
	})
	.catch(error => despatch(fetchProductsError()))
}


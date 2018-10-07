import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// const intialState = {
//   count: 36
// }
import {RECEIVE_POSTS} from '../actions/actions';
const intialState = {
  books: [0,1],
  cover: "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
  title: "React.js for the Visual Learner",
  author: "Mike Mangialardi",
  link: "https://leanpub.com/reactjsforthevisuallearner"
}

function reducer (state = intialState, action) {
    if(action.type){
      return {
        ...state
      }
    }
    if(action.type === "DECREMENT"){
      let decremented = Object.assign({}, state)
      decremented.books.pop()
      return decremented
      return state
    }
    return state;
}
export default reducer;
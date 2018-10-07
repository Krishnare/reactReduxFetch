import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { actions } from 'actions';


const intialState = {
  count: 0
}
export default function reducer (state = intialState, action) {
      if(action.type === "SET_DATA"){
        return {
          count: state.count + 1
        }
      }
      return state;
    }

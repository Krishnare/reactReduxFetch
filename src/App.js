import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Reducer from './reducers/counter';
// import logo from './logo.svg';
import './App.css';

import Books from './books'

var toggleClass = '';
class App extends Component {
  constructor(props) {
    super(props);
  }


//define actions within an action creator
increment() {
  const INCREMENT = 'INCREMENT';
  return {
    type: INCREMENT
  }
}

decrement() {
  const DECREMENT = 'DECREMENT';
  return {
    type: DECREMENT
  }
};

// componentDidMount(){
//   document.getElementById('increment').addEventListener('click', function(){
//     store.dsipatch(increment())
//   });

//   document.getElementById('decrement').addEventListener('click', function(){
//     store.dsipatch(decrement());
//   });
// }
  render() {
    return (
      <div>
        <button id="increment" onClick={this.increment}> + </button>
        <span>{this.props.incremented}</span>
        <button id="decrement" onClick={this.decrement}> - </button>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(App);

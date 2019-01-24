import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props);
  }
  state = {count : 0};
  handleClickInc = () => {
    this.setState(({count}) => ({count: count + 1}));
  };
  handleClickDec = () => {
    this.setState(({count}) => ({count: count - 1}));
  };
  render() {
    return (
      <div>
        <h2>
          count = {this.state.count}
        </h2>
        <button onClick = {this.handleClickInc}> increase </button>
        <button onClick = {this.handleClickDec}> decrease </button>
     </div>
    )
  }
}
  function count() {
    return (
      <div>
        <label> 0ms </label>
        <button>increase</button>
        <button> decrease </button>
      </div>
    )
  }
export default Counter

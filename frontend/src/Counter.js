import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props);
  }
  state = {count : this.props.count};
  handleClickInc = () => {
    this.setState(({count}) => ({count: count + 1}));
  };
  handleClickDec = () => {
    this.setState(({count}) => ({count: count - 1}));
  };
  render() {
    return (
      <div>
        <p>
          count = {this.state.count}
        <button onClick = {this.handleClickInc}> increase </button>
        <button onClick = {this.handleClickDec}> decrease </button>
        </p>
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

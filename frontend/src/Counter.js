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
    if (this.state.count > 0) {
      this.setState(({count}) => ({count: count - 1}));
    }
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick = {this.handleClickInc}> increase </button>
        <button onClick = {this.handleClickDec}> decrease </button>
     </div>
    )
  }
}
export default Counter

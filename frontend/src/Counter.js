import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  count = 0
  render() {
    return <button onClick = {this.handleClick}> clickMe </button>		
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
  const element = <count />
//  ReactDOM.render(
  //  element, document.getElementById('root'))

export default Counter

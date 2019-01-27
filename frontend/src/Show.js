import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  
  render(x) {
    return (
      <div>
      	<p><small>id:  {this.props.id}</small></p>
      	Name: {this.props.name}
      	<p>episodes_seen: {this.props.counter} </p>

      </div>
    )
  }
}

export default App

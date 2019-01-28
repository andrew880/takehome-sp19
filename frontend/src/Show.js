import React, { Component } from 'react'

class App extends Component {
  render(x) {
    return (
      <div>
      	<p>
      		<div>id:  {this.props.id}</div>
  			  <div>Name: {this.props.name}</div>
  			  episodes_seen: {this.props.counter} 
  		  </p>
      </div>
    )
  }
}

export default App
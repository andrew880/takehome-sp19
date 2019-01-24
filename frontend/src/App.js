import React, { Component } from 'react'
import Instructions from './Instructions'
import Show from './Show'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [
        {id: 1, name: "Game of Thrones", episodes_seen: 0},
        {id: 2, name: "Naruto", episodes_seen: 220},
        {id: 3, name: "Black Mirror", episodes_seen: 3},
      ]
    }
  }
  render() {
    return (
      <div ClassName = "App">
        <Instructions complete="False" />
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}

        {this.state.shows[0].name} : <Counter count = {this.state.shows[0].episodes_seen}/>
        {this.state.shows[1].name} : <Counter count = {this.state.shows[1].episodes_seen}/>
        {this.state.shows[2].name} : <Counter count = {this.state.shows[2].episodes_seen}/>
	
      </div>
    )
  }
}
export default App

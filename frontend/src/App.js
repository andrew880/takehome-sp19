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
      ], texts: "", input: '', output: ''
    }
  }
  handleAddText = () => {
    const temp = <Counter count = {0}/>
    this.setState(({text}) => ({text: text + "  " + this.state.input + ":0 "}));
    this.state.shows.push({id: this.state.shows.length + 1, name: this.state.input, episodes_seen: 0});

  };

  handleChange = (event) => {
    const {name, type, value} = event.nativeEvent
    this.state.input = event.target.value
  }

  render() {
    return (
      <div className="App">
        <Instructions complete="False" />
        {this.state.shows.map(x => 
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} counter={<Counter count = {x.episodes_seen}/>}/>
        )}

        <input type="text" name="Shows" onChange={this.handleChange}/>
        <button onClick = {this.handleAddText}> add shows </button>
      </div>
    )
  }
}
export default App

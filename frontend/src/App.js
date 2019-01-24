import React, { Component } from 'react'
import Instructions from './Instructions'
import Show from './Show'
import Counter from './Counter'

// function handleChange(event) {
//     const {name, type, value} = event.nativeEvent
//     // let processedData = value;
//     // if(type==='text') {
//     //     processedData = value.toUpperCase();
//     // } else if (type==='number') {
//     //     processedData = value * 2;
//     // }
//     // this.setState({[name]: processedData})
//     this.state.input = "test"
//     // this.handleAddText()
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [
        {id: 1, name: "Game of Thrones", episodes_seen: 0},
        {id: 2, name: "Naruto", episodes_seen: 220},
        {id: 3, name: "Black Mirror", episodes_seen: 3},
      ], text: '', input: '', output: ''
    }
    // this.handleChange = handleChange.bind();
  }
  handleAddText = () => {
    const temp = <Counter count = {0}/>
    this.setState(({text}) => ({text: text + "  " + this.state.input + ":0 "}));
    this.state.shows.push({id: this.state.shows.size, name: this.state.input, episodes_seen: 0});
    return temp
  };

handleChange = (event) => {
    const {name, type, value} = event.nativeEvent
    // let processedData = value;
    // if(type==='text') {
    //     processedData = value.toUpperCase();
    // } else if (type==='number') {
    //     processedData = value * 2;
    // }
    // this.setState({[name]: processedData})
    // this.setState({[name]: this.state.input})
    this.state.input = event.target.value
    // this.handleAddText()
}

  render() {
    return (
      <div className="App">
        <Instructions complete="False" />
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}
        
        {this.state.shows[0].name} : <Counter count = {this.state.shows[0].episodes_seen}/>
        {this.state.shows[1].name} : <Counter count = {this.state.shows[1].episodes_seen}/>
        {this.state.shows[2].name} : <Counter count = {this.state.shows[2].episodes_seen}/>
        {this.state.text}

        <input type="text" name="Shows" onChange={this.handleChange}/>
        <button onClick = {this.handleAddText}> add shows </button>
      </div>
    )
  }
}
export default App

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {//state is an obj that is full of information that you want to access they are our props.
      display: ''
    }
  }
  handleChange(value){
    this.setState({
      display: value
    })
  }
  render(){//render is what happens everytime the page refreshes ie. the page rerender one of reacts lifecycles
    return(
      <div>
        <input type="text" onChange={e => this.handleChange(e.target.value)}/>
        <h1>{this.state.display}</h1>
      </div>
    )
  }
}

export default App;

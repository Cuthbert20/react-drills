import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      message: ""
    }
  }

handleText(value){
  this.setState({
    message: value
  })
}
  render() {
    return (
      <div className="App">
        <input type="text" placeholder= "React Fun" onChange={event => this.handleText(event.target.value)}/>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;

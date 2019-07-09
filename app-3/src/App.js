import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      arr: ["Mike ", "Stuart ", "Joe ", "Spencer ", "Jayson ", "Nick"],
      filterStr: ""
    }
  }
  handleFam(filtered){
    this.setState({filterStr: filtered})
  }
  render() {
    let famDisplay = this.state.arr.filter((elm) => {
      return elm.includes(this.state.filterStr)
    }).map((elm) => {
      return <h2>{elm}</h2>
    })
    return (
      <div className="App">
        <input type="text" onChange={event => this.handleFam(event.target.value)}/>
        <h2>{famDisplay}</h2>
      </div>
    );
  }
}

export default App;


//let display = this.state.arr.filter(elm => elm.includes(this.state.filterStr))
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      arr: ["Mike ", "Stuart ", "Joe ", "Spencer ", "Jayson ", "Nick"]
    }
  }
  render() {
    let fam = this.state.arr.map((elm) => {
      return <h2>{elm}</h2>
    } )
    return (
      <div className="App">
        <h2>{fam}</h2>
      </div>
    );
  }
}

export default App;

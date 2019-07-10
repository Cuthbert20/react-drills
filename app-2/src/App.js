import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      arr: ["https://images.unsplash.com/photo-1562758624-44f3376ad1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1500271910699-5c284ac9e2ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1325&q=80",
      "https://images.unsplash.com/photo-1547286383-13a9dba6c67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      "https://images.unsplash.com/photo-1478034737238-29de3734b5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    ]
    }
  }
  render(){
    let arrDecon = this.state.arr.map(e => {
      return <h2>{e}</h2>
    })
    return (
      <div className="App">
        <h1>{arrDecon}</h1>
      </div>
    );
  }
}
  

export default App;

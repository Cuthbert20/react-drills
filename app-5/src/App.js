import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image theImage = {"https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80"}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask"
import List from "./components/List"
import Todo from "./components/Todo"

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }
  handleAddTask(task){
    this.setState({list: [...this.state.list, task]})
  }
  render() {
    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <NewTask add={this.handleAddTask}/>
        <List tasks ={this.state.list}/>
      </div>
    );
  }
}

export default App;

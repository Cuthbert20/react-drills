import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      task: ''
    }
    this.aTask = this.aTask.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  aTask(value){
    this.setState({task: value})
  }
  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.task],
      task: ""
    })
  }
  render() {
    let list = this.state.list.map(elm => {
      return <Todo task={elm}/>
    })
    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <input placeholder="give us a new task" value={this.state.task} type="text" onChange= {e => this.aTask(e.target.value)}/>
        <button onClick= {this.handleAddTask}>NEW TASK</button>
        <br/>
        {list}
      </div>
    );
  }
}

export default App;

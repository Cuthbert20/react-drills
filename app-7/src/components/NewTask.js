import React, {Component} from 'react'

export default class NewTask extends Component {
    constructor(){
        super()
        
        this.state = {
            input: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleInputChange(value){
        this.setState({
            input: value
        })
    }
    handleAdd(){
        this.props.add(this.state.input)
        this.setState({
            input: ""
        })
    }
    render(){
        return(
            <div>
                <input onChange= {e => this.handleInputChange(e.target.value)} placeholder="Enter new task" value={this.state.input} type="text"/>
                <button onClick={event => this.handleAdd}>Add</button>
            </div>
        )
    }
}
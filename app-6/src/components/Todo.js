import React, {Component} from 'react'

export default class Todo extends Component {
    render(){
        return (
            <h2>{this.props.task}</h2>
        )
    }
}
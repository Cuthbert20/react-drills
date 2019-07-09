import React, {Component} from "react"
import Todo from './Todo'

export default class List extends Component {
    render(){
        let list = this.props.tasks.map((elm,index) => {
            return <Todo key={index} task={elm} />
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}
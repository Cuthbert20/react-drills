import React, {Component} from "react"

export default class Image extends Component {
    constructor(props){
        super(props)
        this.state = {
            key: props.theImage
        }
    }
    render(){
        return(
            <div>
                <h2>Hey You</h2>
                <img src= {this.state.key} alt=""/>
            </div>
        )
    }
}
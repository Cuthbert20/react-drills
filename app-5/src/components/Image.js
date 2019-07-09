import React, {Component} from "react"

export default class Image extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>Hey You</h2>
                <img src= {this.props.theImage} alt=""/>
            </div>
        )
    }
}
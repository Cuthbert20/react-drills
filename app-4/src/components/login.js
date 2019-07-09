import React, {Component} from "react"

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.alertLogin = this.alertLogin.bind(this)
    }

userName(name){
    return (
        this.setState({username: name})
    )
}
password(pass){
    return (
        this.setState({password: pass})
    )
}
alertLogin(){
    alert(`Users Name is ${this.state.username} & the password is ${this.state.password}`)
}
    render(){
        return (
            <div>
                <input onChange = {event => this.userName(event.target.value)}/>
                <input type="password" onChange = {e => this.password(e.target.value)}/>
                <button onClick={this.alertLogin}> Submit </button>
            </div>
        )
    }
}
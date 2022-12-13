import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: true
        }
    }
    handleLogin = () => {
        this.setState({ value: !(this.state.value) })
        this.props.pageData(!(this.state.value))
    }
    render() {
        return (
            <div id='login_card'>
                <input id='email_input' placeholder='Enter Email' />
                <input id='password_input' placeholder='Enter Password' />
                <button id='login_btn' onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

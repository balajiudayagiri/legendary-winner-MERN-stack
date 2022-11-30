import React, { Component } from 'react'
import './LoginPopUp.css'

export default class LoginPopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginData: {},
            mailBoxError: null,
            passwordBoxError: null,
            mailBoxErrorStyle: null,
            passwordBoxErrorStyle: null
        }
    }
    handleDataInput = (e) => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                [e.target.id]: e.target.value
            }
        })
        this.setState({
            mailBoxError: null,
            passwordBoxError: null,
            mailBoxErrorStyle: null,
            passwordBoxErrorStyle: null
        })
    }
    validateinputfills = (data) => {
        if (!data.email) {
            this.setState({
                mailBoxError: 'Please enter Email',
                mailBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            this.setState({
                mailBoxError: 'Please enter a valid Email format',
                mailBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })

        }
        if (!data.password) {
            this.setState({
                passwordBoxError: 'Please enter password',
                passwordBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        } else if (!(data.password.length > 7 && data.password.length < 16)) {
            this.setState({
                passwordBoxError: 'Must have 8 charectors and atleast have 1 lowerCase, upperCase, number,@,#,$',
                passwordBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        }
    }
    handleResult = (e) => {
        this.validateinputfills(this.state.loginData);
        e.preventDefault()
    }
    handleChildElementClick = (e) => {
        e.stopPropagation();
    }
    render() {
        return (
            <div id='pop_up_card' onClick={this.props.handleClosePopUp}>
                <div id='Login_card' className='authen_box' onClick={this.handleChildElementClick}>
                    <h1>Login</h1>
                    <button onClick={this.props.handleClosePopUp}>&#x2716;</button>
                    <form className='Login_card_form'>
                        <span>
                            <input style={this.state.mailBoxErrorStyle} type='email' id='email' placeholder='Enter your Email' onChange={this.handleDataInput} />
                            <p className='errorMessageUnderInputFields'>{this.state.mailBoxError}</p>
                        </span>
                        <span>
                            <input style={this.state.passwordBoxErrorStyle} type='password' id='password' placeholder='Enter your Password' onChange={this.handleDataInput} />
                            <p className='errorMessageUnderInputFields'>{this.state.passwordBoxError}</p>
                        </span>
                        <button onClick={this.handleResult}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

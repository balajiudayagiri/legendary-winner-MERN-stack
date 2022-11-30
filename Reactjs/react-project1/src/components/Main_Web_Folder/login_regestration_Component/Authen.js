import React, { Component } from 'react'
import LoginPopUp from './LoginPopUp'
import './Authen.css';
import RegistrationPopUp from './RegistrationPopUp';

export default class Authen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginData: {},
            registerData: {},
            card: null
        }
    }
    handleClosePopUp = (event) => {
        this.setState({
            card: null
        })
    }

    handleLoginData = () => {
        this.setState({
            card: <LoginPopUp handleClosePopUp={this.handleClosePopUp} />
        })
    }
    handleRegistrationData = () => {
        this.setState({
            card: <RegistrationPopUp handleClosePopUp={this.handleClosePopUp} />
        })
    }
    render() {
        return (
            <div id='authentication_page'>
                <div className='formbox_btn'>
                    <button onClick={this.handleLoginData}>Login</button>
                    <button onClick={this.handleRegistrationData}>Register</button>
                </div>
                {this.state.card}
            </div>
        )
    }
}

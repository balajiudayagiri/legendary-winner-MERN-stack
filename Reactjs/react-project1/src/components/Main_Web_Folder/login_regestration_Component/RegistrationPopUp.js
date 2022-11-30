import React, { Component } from 'react'
import './RegistrationPopUp.css'

export default class RegistrationPopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registrationData: {},
            nameBoxError: '',
            mailBoxError: '',
            passwordBoxError: '',
            confirmPasswordBoxError: '',
            mobileNumberBoxError: '',
            addressBoxError: '',

            nameBoxErrorStyle: {},
            mailBoxErrorStyle: {},
            passwordBoxErrorStyle: {},
            confirmPasswordBoxErrorStyle: {},
            mobileNumberBoxErrorStyle: {},
            addressBoxErrorStyle: {}
        }
    }
    handleDataInput = (e) => {
        this.setState({
            registrationData: {
                ...this.state.registrationData,
                [e.target.id]: e.target.value
            }
        })
        this.setState({
            nameBoxError: null,
            mailBoxError: null,
            passwordBoxError: null,
            confirmPasswordBoxError: null,
            mobileNumberBoxError: null,
            addressBoxError: null
        })
    }
    validateinputfills = (data) => {
        // { border: '1px solid red', backgroundColor: '#e7aeae99', color: 'white' }
        if (!(data.firstName && data.lastName)) {
            this.setState({
                nameBoxError: 'Please enter your full name',
                nameBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        }
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
        } else if (!(/^[a-zA-Z0-9\s@#$]{7,12}$/.test(data.password))) {
            this.setState({
                passwordBoxError: 'Must have 8 charectors and atleast have 1 lowerCase, upperCase, number,@,#,$',
                passwordBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        }
        if (!(data.confirmPassword === data.password)) {
            this.setState({
                confirmPasswordBoxError: "Passwords doesn't match",
                confirmPasswordBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        }
        if (!(data.mobile_number)) {
            this.setState({
                mobileNumberBoxError: "please enter your mobile number",
                mobileNumberBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        } else if (!(data.mobile_number.length === 10)) {
            this.setState({
                mobileNumberBoxError: "please enter a valid 10 digit number",
                mobileNumberBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        }
        if (!(data.address)) {
            this.setState({
                addressBoxError: "please enter your full address",
                addressBoxErrorStyle: { border: '1px solid red', backgroundColor: '#e7aeae99' }
            })
        }
    }
    handleResult = (e) => {
        this.validateinputfills(this.state.registrationData)
        e.preventDefault()
    }
    handleChildElementClick = (e) => {
        e.stopPropagation();
    }
    render() {
        return (
            <div id='pop_up_card' onClick={this.props.handleClosePopUp}>
                <div id='registration_card' className='authen_box' onClick={this.handleChildElementClick}>
                    <h1>Register here</h1>
                    <button onClick={this.props.handleClosePopUp}>&#x2716;</button>
                    <form className='registration_card_form' >
                        <span>
                            <input style={this.state.nameBoxErrorStyle} type='text' placeholder='Enter your First Name' id='firstName' onChange={this.handleDataInput} />
                            <input style={this.state.nameBoxErrorStyle} type='text' placeholder='Enter your Last Name' id='lastName' onChange={this.handleDataInput} />
                            <p className='errorMessageUnderInputFields'>{this.state.nameBoxError}</p>
                        </span>
                        <input style={this.state.mailBoxErrorStyle} type='email' placeholder='Enter your Email' id='email' onChange={this.handleDataInput} />
                        <p className='errorMessageUnderInputFields'>{this.state.mailBoxError}</p>
                        <input style={this.state.passwordBoxErrorStyle} type='password' placeholder='Enter your Password' id='password' onChange={this.handleDataInput} />
                        <p className='errorMessageUnderInputFields'>{this.state.passwordBoxError}</p>
                        <input style={this.state.confirmPasswordBoxErrorStyle} type='password' placeholder='Confirm your Password' id='confirmPassword' onChange={this.handleDataInput} />
                        <p className='errorMessageUnderInputFields'>{this.state.confirmPasswordBoxError}</p>
                        <input style={this.state.mobileNumberBoxErrorStyle} type='number' placeholder='Enter your Mobile Number' id='mobile_number' onChange={this.handleDataInput} />
                        <p className='errorMessageUnderInputFields'>{this.state.mobileNumberBoxError}</p>
                        <textarea style={this.state.addressBoxErrorStyle} rows="5" cols="33" placeholder='Enter your Address' id='address' onChange={this.handleDataInput}></textarea>
                        <p className='errorMessageUnderInputFields'>{this.state.addressBoxError}</p>
                        <button onClick={this.handleResult}>Register</button>
                    </form>
                </div >
            </div>
        )
    }
}

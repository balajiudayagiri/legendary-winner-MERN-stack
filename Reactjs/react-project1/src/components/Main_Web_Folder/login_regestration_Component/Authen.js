import React, { Component } from 'react'
import LoginPopUp from './LoginPopUp'
import './Authen.css';
import RegistrationPopUp from './RegistrationPopUp';
import img1 from '../images/AutumnSale.jpeg'
import img2 from '../images/kids-wear-banner-design.jpg'
import img3 from '../images/newCollection.jpg'

export default class Authen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginData: {},
            registerData: {},
            card: null,
            popUpBackground: {},

        }
    }
    handleAfterAuthentiaction = (data, childData) => {
        this.props.handleAfterAuthentiaction(data, childData)
        console.log(data, "from <Authen/>", childData);
    }
    handleClosePopUp = () => {
        this.setState({
            card: null,
            popUpBackground: {}
        })
    }
    handleLoginData = () => {
        this.setState({
            card: <LoginPopUp handleClosePopUp={this.handleClosePopUp} handleAfterAuthentiaction={(data, childData) => this.handleAfterAuthentiaction(data, childData)} />,
            popUpBackground: { filter: ' blur(8px)' }
        })
    }
    handleRegistrationData = () => {
        this.setState({
            card: <RegistrationPopUp handleClosePopUp={this.handleClosePopUp} handleAfterAuthentiaction={(data, childData) => this.handleAfterAuthentiaction(data, childData)} />,
            popUpBackground: { filter: ' blur(8px)' }
        })
    }

    render() {
        return (
            <div id='authentication_page'>
                <div id='main_login_box' style={this.state.popUpBackground}>
                    <div id='gretting_box'>
                        <img src={img1} alt='img' style={{ height: '300px', width: '300px' }} />
                        <img src={img2} alt='img' style={{ height: '300px', width: '300px' }} />
                        <img src={img3} alt='img' style={{ height: '300px', width: '300px' }} />
                    </div>
                    <div className='formbox_btn'>
                        <h1 className='greeting_h1'>Welcome to FakeStore</h1>
                        <p className='greeting_p'>You will be the first to know about our latest styles,
                            exclusive offers, and much more</p>
                        <button onClick={this.handleLoginData}>Login</button>
                        <button onClick={this.handleRegistrationData}>Register</button>
                    </div>
                </div>
                {this.state.card}
            </div>
        )
    }
}

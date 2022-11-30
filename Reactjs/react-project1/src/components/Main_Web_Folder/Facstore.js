import React, { Component } from 'react';
import Authen from './login_regestration_Component/Authen';
import Header from './NavComponents/Header';
import './Facstore.css'


export default class Facstore extends Component {
    render() {
        return (<>
            <Header />
            <Authen />
        </>)
    }
}

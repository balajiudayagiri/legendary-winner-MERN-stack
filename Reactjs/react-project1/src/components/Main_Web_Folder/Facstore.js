import React, { Component } from 'react';
import Authen from './login_regestration_Component/Authen';
import Header from './NavComponents/Header';
import './Facstore.css'
import HomePage from './Home_Page/HomePage';


export default class Facstore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validationResult: false,
            childDataStore: ''
        }
    }

    handleAfterAuthentiaction = (data, childData) => {
        this.setState({
            validationResult: data,
        })
        console.log(data, "from <Facstore/>", "-----childData:::", childData);
    }
    render() {
        return (<>
            <Header />
            {this.state.validationResult ?
                <HomePage />
                :
                <Authen handleAfterAuthentiaction={
                    (data, childData) => this.handleAfterAuthentiaction(data, childData)
                } />
            }

        </>)
    }
}

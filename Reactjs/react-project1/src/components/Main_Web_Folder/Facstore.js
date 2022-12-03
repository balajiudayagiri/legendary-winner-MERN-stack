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
            childDataStore: {}
        }
    }
    handlePrintDataInConsole = (info) => {
        console.log(info, "from handlePrintDataInConsole in <FakeStore/>");
    }

    handleAfterAuthentiaction = (data, childData) => {
        // let { infoFromChild } = { ...childData }
        this.setState({
            validationResult: data,
        })
        this.handlePrintDataInConsole(childData)
        console.log(data, "from <Facstore/>", "-----childData:::",);
        // return infoFromChild
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

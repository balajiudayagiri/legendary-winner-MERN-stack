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
    // handlePrintDataInConsole = (info) => {
    //     console.log(info, "from handlePrintDataInConsole in <FakeStore/>");
    // }

    handleAfterAuthentiaction = (data, childData) => {
        // let { infoFromChild,asas } = { ...childData }
        this.setState({
            validationResult: data,
            childDataStore: childData
        })
        // this.handlePrintDataInConsole(childData)
        console.log(data, "from <Facstore/>", "-----childData:::", childData);
    }
    componentDidUpdate = () => {
        console.log(this.state, "cdUpdate");
    }
    render() {

        return (<>
            <Header />
            {this.state.validationResult ?
                <HomePage userdata={this.state.childDataStore} />
                :
                <Authen handleAfterAuthentiaction={
                    (data, childData) => this.handleAfterAuthentiaction(data, childData)
                } />
            }

        </>)
    }
}

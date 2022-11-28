import React, { Component } from 'react'
import HomePage from './HomePage';
import Login from './Login';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: true,
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log(state.page);
        return null
    }
    changePhase = (val) => {
        this.setState({ page: val })
    }
    render() {
        return (<>
            {(this.state.page) ?
                <Login pageData={this.changePhase} /> :
                <HomePage pageData={this.changePhase} />
            }

        </>)
    }
}

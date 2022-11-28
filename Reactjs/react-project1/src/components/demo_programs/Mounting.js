import React, { Component } from 'react'

class Mounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favaratecolor: "red"
        }
        console.log("this is constructor");

    }

    static getDerivedStateFromProps(props, state) {
        console.log("this is getderived");
        return null
    }
    componentDidMount() {
        console.log("this is compounddidmount");
    }
    render() {
        return (
            <div>myfavoratecoloris:</div>
        )
    }
}

export default Mounting
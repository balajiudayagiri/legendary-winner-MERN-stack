import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "hello from child state lift"
        }
    }
    render() {
        return (
            <>
                <button onClick={this.props.handlechildstate(this.state.data)}>click me</button>
            </>
        )
    }
}

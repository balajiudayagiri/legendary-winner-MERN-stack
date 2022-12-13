import React, { Component } from 'react'
import Component2 from './Component2'

export default class Component1 extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (<>
            <h1>{this.props.value + 1 + " from Component1.js"}</h1>
            <Component2 value={this.props.value} />
        </>)
    }
}

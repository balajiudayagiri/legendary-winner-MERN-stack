import React, { Component } from 'react'

export default class Component2 extends Component {
    render() {
        return (<>
            <h1>{this.props.value + 2 + " from Component2.js"}</h1>
        </>)
    }
}

import React, { Component } from 'react'

export default class ChildComp extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

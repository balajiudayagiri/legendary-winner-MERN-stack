import React, { Component } from 'react'

export default class Child1 extends Component {
    render() {
        return (
            <div>
                <input type='text' id='dataaa' onChange={this.props.handleData} value={this.props.data} />
                <button onClick={this.props.handleResult}>click</button>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Practice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleAdd = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleRemove = () => {
        (this.state.count > 0) && this.setState({ count: this.state.count - 1 });

    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        )
    }
}


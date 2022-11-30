import React, { Component } from 'react'
import Child from './Child'
import Child1 from './Child1'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFromChild: ''
        }
    }
    handleData = (e) => {
        // this.setState({ dataFromChild: { ...this.state.dataFromChild, [e.target.id]: e.target.value } })
        this.setState({ dataFromChild: e.target.value })
    }
    handleResult = (e) => {
        console.log(this.state.dataFromChild);
    }
    render() {
        return (
            <div>
                <Child handleData={this.handleData} handleResult={this.handleResult} data={this.state.dataFromChild} />
                <Child1 handleData={this.handleData} handleResult={this.handleResult} data={this.state.dataFromChild} />

            </div>
        )
    }
}


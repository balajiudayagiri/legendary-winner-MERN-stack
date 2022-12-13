import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "hello from parent state lift"
        }
    }
    handlechildstate = (childData) => {
        console.log(this.state.data);
        console.log(childData);
    }
    render() {
        return (
            <div>
                <Child handlechildstate={(data) => this.handlechildstate(data)} />
            </div>
        )
    }
}

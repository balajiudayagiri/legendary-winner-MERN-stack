import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log("render");
        return (
            <div id='demo_data'>
                {this.props.data.map((item, index) => (
                    <div key={index}>{"text" + item}</div>
                ))}
            </div>
        )
    }
}

import React, { Component } from 'react'
import { MyContext } from './GrandParent'
export default class GrandChild extends Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>{
                    (value) => <h1>{value}</h1>
                }</MyContext.Consumer>
            </div>
        )
    }
}

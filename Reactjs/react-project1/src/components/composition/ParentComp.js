import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    render() {
        return (<>
            <ChildComp>
                <h1>from data 111</h1>
            </ChildComp>
            <ChildComp>
                <h1>from data 222</h1>
            </ChildComp>
        </>)
    }
}

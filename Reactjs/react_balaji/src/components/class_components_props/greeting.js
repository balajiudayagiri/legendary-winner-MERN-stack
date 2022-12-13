import { Component } from 'react';

export default class Greeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: props.name,
            age: (new Date().getFullYear()) - props.value
        }
    }
    render() {
        return (<>
            <h1>hello, {this.state.fname} {this.state.age}</h1>
        </>)
    }
}
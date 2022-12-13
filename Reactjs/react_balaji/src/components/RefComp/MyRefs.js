import React, { Component } from 'react'

export default class MyRefs extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }
    componentDidMount = () => {
        console.log(this.myRef.current.innerHTML)
    }
    render() {
        return (
            <div ref={this.myRef}>MyRefs hello</div>
        )
    }
}

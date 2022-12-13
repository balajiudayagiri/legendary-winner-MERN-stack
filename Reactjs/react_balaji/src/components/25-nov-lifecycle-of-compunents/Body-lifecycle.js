import React, { Component } from 'react'
import BodyUnmount from './BodyUnmount';

export default class Bodymounting extends Component {
    constructor(props) {
        console.log('from constructor():', props.name);
        super(props)
        this.state = {
            data: " from state object: " + props.name,
            dataState: true
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("from getDerivedStateFromProps(), ", 'props: ' + props.name, ', state:' + state.data);
        return null
    }
    componentDidMount() {
        console.log('from componentDidMount(): ' + this.state.data);
    }
    handleUpdate = () => {
        this.setState({ data: this.state.data + " " + new Date().getFullYear() })
    }
    shouldComponentUpdate() {
        console.log("from shouldComponentUpdate()");
        return !(this.state.data.includes(`${new Date().getFullYear()}`))
    }
    getSnapshotBeforeUpdate(preProps, preState) {
        console.log("getSnapshotBeforeUpdate(): " + preProps.name, preState.data);
        return preProps.name + preState;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate(): " + this.props.name);
    }
    handleUnMounting = () => {
        console.log(this.state.dataState);
        this.setState({ dataState: !(this.state.dataState) })
    }
    componentWillUnmount() {
        console.log("componentWillUnmount()");
    }
    render() {
        console.log(' from render(): ' + this.state.data)
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={this.handleUpdate}>click for update the data</button>
                <h1>=====================</h1>
                {(this.state.dataState) ? <BodyUnmount /> : null}
                <button onClick={this.handleUnMounting}>{'click to unmount'}</button>

            </div>
        )
    }
}

import React, { Component } from 'react'
import DataView from './DataView'
import './TableData.css'
export default class TableData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableHeader: [],
            tableData: []
        }
    }
    handleComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((res) => {
                const headerData = Object.keys(res[0])
                this.setState({
                    tableHeader: headerData,
                    tableData: res
                })
            })
    }
    handlePhoto = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((res) => {
                const headerData = Object.keys(res[0])
                this.setState({
                    tableHeader: headerData,
                    tableData: res
                })
            })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleComments}>Comments</button>
                <button onClick={this.handlePhoto}>handlePhoto</button>
                <DataView header={this.state.tableHeader} data={this.state.tableData} />
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class DataView extends Component {
    render() {
        const { header, data } = this.props;
        return (
            <table id='table_data'>
                <tr>
                    {header.map((item) => (
                        <th>{item}</th>
                    ))}
                </tr>
                {data.map((data) => (
                    <tr>
                        {header.map((item) => (
                            <td>{
                                item === 'url' || item === 'thumbnailUrl' ?
                                    <img src={data[item]} alt={"can't find : " + data[item]} height='100px' width='100px' />
                                    :
                                    data[item]
                            }</td>
                        ))}
                    </tr>
                ))}
            </table>
        )
    }
}

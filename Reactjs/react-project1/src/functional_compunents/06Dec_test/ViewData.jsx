import React from 'react'

export default function ViewData(props) {
    // console.log(props);
    return (
        <table>
            <tr>{props.header.map((item, index) => (
                <th key={index}>{item}</th>
            ))}</tr>
            {props.body.map((obj, index) => (
                <tr key={index}>{props.header.map((item, index) => (
                    <td key={index}>{obj[item]}</td>
                ))}</tr>
            ))}
        </table>
    )
}

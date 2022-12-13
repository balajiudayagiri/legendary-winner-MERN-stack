import React, { useState } from 'react'
import ViewData from './ViewData';
import './TableData.css';

export default function TableData() {
    const [heading, setHeading] = useState([]);
    const [bodyData, setBodyData] = useState([]);
    const handleData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(result => {
                const dataHeader = Object.keys(result[0])
                setHeading(dataHeader);
                setBodyData(result);
            })
    }
    return (<div>
        <button onClick={handleData}>Click to get Data</button>
        <ViewData header={heading} body={bodyData} />
    </div>)
}

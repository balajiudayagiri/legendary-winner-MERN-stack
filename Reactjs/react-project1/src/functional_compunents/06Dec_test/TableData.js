import React, { useState } from 'react'
import ViewData from './ViewData';

export default function TableData() {
    const [heading, setHeading] = useState();
    const [bodyData, setBodyData] = useState();
    // jsonData --> https://jsonplaceholder.typicode.com/todos
    const handleData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                const dataHeader = Object.keys(result[0])
                // console.log(dataHeader);
                setHeading(dataHeader);
                // console.log(result);
                setBodyData(result);
            })
    }
    return (<div>
        <button onClick={handleData}>Click to get Data</button>
        <ViewData header={heading} body={bodyData} />
    </div>)
}

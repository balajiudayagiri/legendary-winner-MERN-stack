import React, { useState } from 'react'
import CardData from './CardData';
import './Reqres.css'

export default function Reqres() {
    const [data, setData] = useState([]);

    const handleData = () => {
        fetch('https://reqres.in/api/users?page')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result.data)
            })
        console.log(data);
    }
    return (
        <div>
            <button onClick={handleData}>ReqRes DATA</button>
            <CardData data={data} />
        </div>
    )
}

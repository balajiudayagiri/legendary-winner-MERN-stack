import React from 'react'
import { useState } from 'react';

export default function Timer() {
    const [data, setData] = useState();

    const handleInput = (e) => {
        setData(e.target.value)
    }
    function handleOutput() {
        data.split('').map((element, index) => {
            setTimeout(() => console.log(element), index * 1000);
            return null
        })
    }
    return (
        <>
            <div id='timer_charector'>
                <input type='text' id='text_input' onChange={handleInput} />
                <button onClick={handleOutput}>CLICK</button>
            </div>
        </>
    )
}

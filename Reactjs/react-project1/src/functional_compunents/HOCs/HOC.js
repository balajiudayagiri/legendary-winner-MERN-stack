import React, { useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import './HOC.css'

export default function HOC() {
    const [dataValue, setDataValue] = useState()
    const handleInput = (e) => {
        setDataValue(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="Enter yourDataValue"
                onChange={handleInput} />
            <Comp1 dataValue={dataValue} />
            <Comp2 dataValue={dataValue} />
            <Comp3 dataValue={dataValue} />
        </div>
    )
}

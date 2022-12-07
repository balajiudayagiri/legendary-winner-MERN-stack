import React from 'react'
import enhancedComponent from './enhancedComponent'

function Comp3(props) {
    return (<>
        <h1 style={{
            color: props.color,
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
        }}>{props.dataValue}</h1>
        <h1>{props.data ? 'hello' : null}</h1>
    </>)
}
export default enhancedComponent(Comp3)
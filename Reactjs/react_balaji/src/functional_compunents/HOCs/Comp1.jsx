import React from 'react'
import enhancedComponent from './enhancedComponent'

function Comp1(props) {
    return (<>
        <h1 style={{
            color: props.color,
            fontFamily: "'Courier New', Courier, monospace"
        }}>{props.dataValue}</h1>
        <h1>{props.data ? 'hello' : null}</h1>
    </>)
}
export default enhancedComponent(Comp1)

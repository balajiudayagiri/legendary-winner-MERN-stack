import React from 'react'
import enhancedComponent from './enhancedComponent'

function Comp2(props) {
    return (<>
        <h1 style={{
            color: props.color,
            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        }}>{props.dataValue}</h1>
        <h1>{props.data ? 'hello' : null}</h1>
    </>)
}

export default enhancedComponent(Comp2)
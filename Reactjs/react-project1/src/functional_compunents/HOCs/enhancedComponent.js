import React, { useState } from 'react'

export default function enhancedComponent(WrapperComponent) {
    return (props) => {
        const [show, setShow] = useState(false);
        const handleONMouseOver = () => setShow(true)
        const handleONMouseOut = () => setShow(false)
        return (<div onMouseOver={handleONMouseOver} onMouseOut={handleONMouseOut}>
            <WrapperComponent {...props} color={show ? 'red' : 'black'} data={show} />
            { }
        </div>)
    }
}

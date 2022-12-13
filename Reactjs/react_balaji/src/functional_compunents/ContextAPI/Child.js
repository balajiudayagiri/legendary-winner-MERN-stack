import React, { useContext } from 'react'
import { MyContextFn } from './GrandParent'

export default function Child() {
    const MyContextDataFromGrandParent = useContext(MyContextFn)
    console.log(MyContextDataFromGrandParent);
    return (
        <div>
            <h1>{MyContextDataFromGrandParent}</h1>
        </div>
    )
}

import React, { Component, createContext } from 'react'
import Parent from './Parent'
export const MyContext = createContext();
export default class GrandParent extends Component {
    render() {
        return (
            <div>
                <MyContext.Provider value="BALAJI">
                    <Parent />
                </MyContext.Provider>
            </div>
        )
    }
}


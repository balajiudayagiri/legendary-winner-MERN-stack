import React, { Component } from 'react'
import ProductPage from '../../23_nov/product_details_card'

export default class HomePage extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (<>
            <h1 id='greeting_homePage'>
                {"Welcome " +
                    (this.props.userdata.firstName ?
                        this.props.userdata.firstName
                        :
                        this.props.userdata.email).split('@')[0].toUpperCase()
                    + ", here is your offers on our latest products"}
            </h1>
            <ProductPage />
        </>
        )
    }
}

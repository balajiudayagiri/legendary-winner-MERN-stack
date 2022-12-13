import React, { Component } from 'react'
import ProductPage from '../23_nov/product_details_card'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: false
        }
    }
    handleLogin = () => {
        this.setState({ value: !(this.state.value) })
        this.props.pageData(!(this.state.value))
    }
    render() {
        return (
            <div id='product_page'>
                <button id='login_btn' onClick={this.handleLogin}>Logout</button>
                <ProductPage />
            </div>
        )
    }
}

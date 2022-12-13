import React, { Component } from "react";
import './product_details_card.css'

export default class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((result) => this.setState({ data: result }))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div id="product_data">
                {this.state.data.map((item) => (
                    <div key={item.id} id={'item' + item.id} className='product_card'>
                        <img src={item.image} alt='error' className="product_image" style={{ width: "100px", height: "100px" }} />
                        <h4>{item.title}</h4>
                        <h5>{'$ ' + item.price}</h5>
                    </div>
                ))}
            </div>
        );
    }
}



import React, { Component } from 'react'
import Modal from './Modal'
import './BodyPortal.css'

export default class BodyPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    handleModleClick = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (<>
            <div onClick={this.handleModleClick} >Show Model</div>
            {this.state.show && <Modal>
                <div id='model_popUp_bg'>
                    <div id='model_popUp_box' >
                        <h4 onClick={this.handleModleClick}>&#x2716;</h4>
                        <h1>BALAJI</h1>
                    </div>
                </div>
            </Modal>}
        </>)
    }
}

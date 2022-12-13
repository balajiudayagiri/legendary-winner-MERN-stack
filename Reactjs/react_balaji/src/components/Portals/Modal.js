import { Component } from 'react'
import { createPortal } from 'react-dom'

const module_root_div = document.getElementById("module_root")

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.container = document.createElement("div")
        this.container.setAttribute("class", "Model_div")
    }
    componentDidMount() {
        module_root_div.appendChild(this.container)
    }
    componentWillUnmount() {
        module_root_div.removeChild(this.container)
    }
    render() {
        return createPortal(this.props.children, this.container)
    }
}

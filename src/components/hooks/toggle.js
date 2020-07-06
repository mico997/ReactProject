// import React, { Component } from 'react'

// export default class Toggle extends Component {
//    constructor(props) {
//        super(props)

//        this.state = {
//            visibility: "visible",
//            buttonText: "Hide"
//        }

//        this.handleToggle = this.handleToggle.bind(this)
//    }

//    handleToggle() {
//        if (this.state.visibility === "visible") {
//            this.setState({
//                visibility: "hidden",
//                buttonText: "Show"
//            })
//        }
//        else {
//            this.setState({
//                visibility: "visible",
//                buttonText: "Hide"
//            })
//        }
//    }

//    render() {
//        return (
//            <div className='toggle-wrapper'>
//                <h3 style={{visibility: this.state.visibility}}>Hide Me!</h3>
//                <button onClick={this.handleToggle}>{this.state.buttonText}</button>
//            </div>
//        )
//    }
// }

// ---------------------------

// import React, { Component } from 'react'

// export default class Toggle extends Component {
//    constructor(props) {
//        super(props)

//        this.state = {
//            visible: true
//        }

//        this.handleToggle = this.handleToggle.bind(this)
//    }

//    handleToggle() {
//        this.setState({ visible: !this.state.visible })
//    }

//    render() {
//        return (
//            <div className='toggle-wrapper'>
//                <h3 style={{visibility: this.state.visible ? "visible" : "hidden"}}>Hide Me!</h3>
//                <button onClick={this.handleToggle}>{this.state.visible ? "Hide" : "Show"}</button>
//            </div>
//        )
//    }
// }

import React, { useState } from 'react'

export default function toggleVisibility() {
    const [visible , updateVisibility ] = useState("visible")

    return (
        <div className='toggle-wrapper'>
            <h3 style={{ visibility: visible }}>Hide Me!</h3>
            <button onClick={() => visible === "visible" ? updateVisibility("hidden") : updateVisibility("visible")}>Toggle visibility</button>
        </div>
    )
}
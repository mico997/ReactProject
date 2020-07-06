// import React, { Component } from 'react'

// export default class Counter extends Component {
//    constructor(props) {
//        super(props)

//        this.state = {
//            count: 0
//        }

//        this.handleIncrease = this.handleIncrease.bind(this)
//        this.handleDecrease = this.handleDecrease.bind(this)
//    }

//    handleIncrease() {
//        this.setState({ count: this.state.count + 1 })
//    }

//    handleDecrease() {
//        this.setState({ count: this.state.count - 1 })
//    }

//    render() {
//        return (
//            <div className='counter-wrapper'>
//                <button onClick={this.handleIncrease}>Up</button>
//                <h3>{this.state.count}</h3>
//                <button onClick={this.handleDecrease}>Down</button>
//            </div>
//        )
//    }
// }

import React, { useState } from 'react'

export default function Counter() {

    const [count, updateCount] = useState(0);


    const countChange = (handleChange) => {
        if (onClick === "up") {
            updateCount({ count: count + 1 })
       }
       else {
            updateCount({ count: count - 1 })
       }
    }
   

  

    return (
        <div className='counter-wrapper'>
            <button onClick={() => countChange()}>Up</button>
            <h3>{count}</h3>
            <button onClick={() => countChange()}>Down</button>
        </div>
    )
}



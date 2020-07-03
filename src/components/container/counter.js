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

import React, { Component } from 'react'

export default class Counter extends Component {
   constructor(props) {
       super(props)

       this.state = {
           count: 0
       }

       this.handleChange = this.handleChange.bind(this)
   }

   handleChange(direction) {
       if (direction === "+") {
            this.setState({ count: this.state.count + 1 })
       }
       else {
            this.setState({ count: this.state.count - 1 })
       }
   }

   render() {
       return (
           <div className='counter-wrapper'>
               <button onClick={() => this.handleChange("+")}>Up</button>
               <h3>{this.state.count}</h3>
               <button onClick={() => this.handleChange("-")}>Down</button>
           </div>
       )
   }
}
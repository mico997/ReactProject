import React, { Component } from 'react'

export default class Alignment extends Component {
   constructor(props) {
       super(props)

       this.state = {
           alignment: "left" 
       }

       this.changeAlignment = this.changeAlignment.bind(this)
   }

   changeAlignment(newAlignment) {
       this.setState({ alignment: newAlignment })
   }

   render() {
       return (
           <div className='alignment-wrapper'>
               <h3 style={{ textAlign: this.state.alignment }}>Align Me!</h3>
               <button onClick={() => this.changeAlignment("left")}>Left</button>
               <button onClick={() => this.changeAlignment("center")}>Center</button>
               <button onClick={() => this.changeAlignment("right")}>Right</button>
           </div>
       )
   }
}
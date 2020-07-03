import React, { Component } from 'react'

export default class TextResizer extends Component {
   constructor(props) {
       super(props)

       this.state = {
           size: 12,
           inputValue: 1
       }

       this.handleInputChange = this.handleInputChange.bind(this)
       this.handleSizeChange = this.handleSizeChange.bind(this)
   }

   handleInputChange(event) {
       if (!isNaN(parseInt(event.target.value))) {
           this.setState({ inputValue: parseInt(event.target.value) })
       }
   }

   handleSizeChange(direction) {
       if (direction === "+") {
           this.setState({
               size: this.state.size + this.state.inputValue
           })
       }
       else {
            this.setState({
                size: this.state.size - this.state.inputValue
            })
       }
   }

   render() {
       return (
           <div className='text-resizer-wrapper'>
               <h3 style={{ fontSize: this.state.size }}>{this.state.size}px</h3>
               <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
               <button onClick={() => this.handleSizeChange("+")}>Bigger</button>
               <button onClick={() => this.handleSizeChange("-")}>Smaller</button>
           </div>
       )
   }
}
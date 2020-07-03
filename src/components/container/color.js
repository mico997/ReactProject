// import React, { Component } from 'react'

// export default class Color extends Component {
//    constructor(props) {
//        super(props)

//        this.state = {
//            text: "Color Me!",
//            color: "black",
//            textInputValue: "Color Me!",
//            colorInputValue: "black"
//        }

//        this.handleTextInputChange = this.handleTextInputChange.bind(this)
//        this.handleColorInputChange = this.handleColorInputChange.bind(this)
//        this.handleSubmit = this.handleSubmit.bind(this)
//    }

//    handleTextInputChange(event) {
//        this.setState({ textInputValue: event.target.value })
//    }

//    handleColorInputChange(event) {
//         this.setState({ colorInputValue: event.target.value })
//     }

//     handleSubmit() {
//         this.setState({
//             text: this.state.textInputValue,
//             color: this.state.colorInputValue
//         })
//     }

//    render() {
//        return (
//            <div className='color-wrapper'>
//                <h3 style={{ color: this.state.color }}>{this.state.text}</h3>
//                <input type="text" onChange={this.handleTextInputChange} value={this.state.textInputValue} />
//                <input type="text" onChange={this.handleColorInputChange} value={this.state.colorInputValue} />
//                <button onClick={this.handleSubmit}>Submit</button>
//            </div>
//        )
//    }
// }

import React, { Component } from 'react'

export default class Color extends Component {
   constructor(props) {
       super(props)

       this.state = {
           text: "Color Me!",
           color: "black",
           textInputValue: "Color Me!",
           colorInputValue: "black"
       }

       this.handleInputChange = this.handleInputChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleKeyPress = this.handleKeyPress.bind(this)
   }

   handleInputChange(event) {
       this.setState({ [event.target.name]: event.target.value })
   }

    handleSubmit() {
        this.setState({
            text: this.state.textInputValue,
            color: this.state.colorInputValue
        })
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
            this.handleSubmit()
        }
    }

   render() {
       return (
           <div className='color-wrapper'>
               <h3 style={{ color: this.state.color }}>{this.state.text}</h3>
               <input 
                    type="text" 
                    name="textInputValue" 
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress} 
                    value={this.state.textInputValue} 
                />
               <input 
                    type="text" 
                    name="colorInputValue" 
                    onChange={this.handleInputChange} 
                    onKeyPress={this.handleKeyPress} 
                    value={this.state.colorInputValue} 
                />
               <button onClick={this.handleSubmit}>Submit</button>
           </div>
       )
   }
}
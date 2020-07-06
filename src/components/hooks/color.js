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

import React, { useState } from 'react'

export default function Color() {
    const [startingColor,  updateColor] = useState("black")




    const colorChange = (handleColorInputChange) => {
        useState({ colorInputValue: useState.updateColor })

    }


       



  

   
       return (
           <div className='color-wrapper'>
               <h3 style={{ color: startingColor }}>{text}</h3>
               <input 
                    type="text" 
                    name="textInputValue" 
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} 
                    value={textInputValue} 
                />
               <input 
                    type="text" 
                    name="colorInputValue" 
                    onChange={handleInputChange} 
                    onKeyPress={handleKeyPress} 
                    value={colorInputValue} 
                />
               <button onClick={this.handleSubmit}>Submit</button>
           </div>
       )
}
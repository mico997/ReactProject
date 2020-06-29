import React, { Component} from 'react'

export default class ColorMe extends Component {
   constructor(props) {
        super(props)

         this.state = {
             text: "Color Me",
             color: "black",
             textInput:"color Me",
             colorInput: "black"
          }

          this.handleTextInputChange=this.handleTextInputChange.bind(this) 
          this.handleSubmit=this.handleSubmit.bind(this)  

   handleTextInputChange(event) {

        this.setState ({ [event.target.name]: event.target.value })

   }
   handleColorInputChange(event){
       this.setState({[event.target.name]: event.target.value})
   }

   handleSubmit(){
       this.setState({
           text: this.state.textInput,
           color: this.state.colorInput
       })
   }



   render() {
       return (
           <div className='color-wrapper'>
               <h3 style={{color: this.state.color}}>{this.state.text}</h3>
               <input type="text"  name="textInput" onChange={this.state.textInput} value={this.state.textInput} />
               <input type="text" name="colorInput" onChange={this.state.colorInput} value={this.state.textInput} />
               <button onClick={this.handleSubmit}>Submit!</button>
           </div>
       )
   }
}
import React, { Component} from 'react'

import ColorMe from "./color"

export default class FontSize extends Component {
   constructor(props) {
        super(props)

         this.state = {
             number: 0
              
          }
   }

   increaseNumber() {
       this.setState({number: this.number + 1})
   }

   render() {
       return (
           <div className='font-size-section'>
               
               <button onClick={() => this.increaseNumber()}>Up</button>

               <h1 >0</h1>

               <button>Down</button>

        <ColorMe/>

                
           </div>
       )
   }
}
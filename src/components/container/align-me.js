import React, { Component} from 'react'

import HideMe from "./hide-me"


export default class AlignMe extends Component {
   constructor(props) {
        super(props)

         this.state = {
             alignment: "left"
              
          }
          this.changeAlignment = this.changeAlignment.bind(this)
   }

   changeAlignment(newAlignment) {
       this.setState({alignment: newAlignment })
   }

   render() {
       return (  
           <div className='nav-page'>
               <div><h1 style={{textAlign: this.state.alignment}}>Align Me!</h1></div>



               <button onClick={() => this.changeAlignment("left")}>Left</button>
               <button onClick={() => this.changeAlignment("center")}>Center</button>
               <button onClick={() => this.changeAlignment("right")}>Right</button>

               <div className="underline"></div>

               <HideMe/>




            </div>
               









        )
   }
}
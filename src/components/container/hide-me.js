import React, { Component} from 'react'
import FontSize from './font-size'

export default class HideMe extends Component {
   constructor(props) {
        super(props)

         this.state = {
             visibleContent: "visible"
              
          }
   }

   hideContent(hiddenContent) {
       this.setState({visibleContent: hiddenContent})
   }

   

   render() {
       return (
           <div className='hide-me-section'>
               <h2 style={{visibility: this.state.visibleContent}}>Hide Me!</h2>

               <button onClick={() => this.state.visibleContent === "visible" ? this.hideContent("hidden") : this.hideContent("visible") }>Hide</button>



               <FontSize />



                
            </div>
       )
   }
}

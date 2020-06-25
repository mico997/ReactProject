import React, { Component} from 'react'


export default class AlignPage extends Component {
   constructor(props) {
        super(props)

         this.state = {
              
          }
   }

   render() {
       return (
           <div className='nav-page'>
               <div><h1>Align Me!</h1></div>

               <button>Left</button>
               <button>Center</button>
               <button>Right</button>


           </div>
       )
   }
}
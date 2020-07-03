import React, { Component } from 'react'

export default class Clock extends Component {
   constructor(props) {
       super(props)

       this.state = {
           date: new Date()
       }
   }

   componentDidMount() {
       this.interval = setInterval(() => this.setState({ date: new Date() }), 1000)
   }

   componentWillUnmount() {
       clearInterval(this.interval)
   }

   formattedTime() {
       const date = this.state.date
       const hours = date.getHours()
       const minutes = date.getMinutes()
       const seconds = date.getSeconds()
       
       let time = ""
       time += hours <= 12 ? `${hours}:` : `${hours - 12}`
       time += minutes >= 10 ? `${minutes}:` : `0${minutes}:`
       time += seconds >=10 ? seconds : `0${seconds}`

       return time
   }

   render() {
       return (
           <div className='clock-wrapper'>
               <h3>{this.formattedTime()}</h3>
           </div>
       )
   }
}
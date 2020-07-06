import React, { Component } from 'react';
import Alignment from "./hooks/alignment"
import Toggle from "./hooks/toggle"
import Counter from "./hooks/counter"
import TextResizer from "./traditional/textResizer"
import Color from "./hooks/color"
import Clock from "./hooks/clock"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Alignment />
        <hr/>
        <Toggle />
        <hr/>
        <Counter />
        <hr/>
        <TextResizer />
        <hr/>
        <Color />
        <hr/>
        <Clock />
      </div>
    );
  }
} 
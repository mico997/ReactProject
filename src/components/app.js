import React, { Component } from 'react';
import Alignment from "./container/alignment"
import Toggle from "./container/toggle"
import Counter from "./container/counter"
import TextResizer from "./container/textResizer"
import Color from "./container/color"
import Clock from "./container/clock"

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
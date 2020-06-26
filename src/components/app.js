import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


import AlignMe from "./container/align-me";
import HideMe from "./container/hide-me";
import FontSize from "./container/font-size";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <Router>
            <div>

              <AlignMe/>



            </div>
            

          

          </Router>
      </div>
    );
  }
}

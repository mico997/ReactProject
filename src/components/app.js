import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


import PageContainer from "./container/page-container";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Align Me!</h1>

          </div>

        </Router>
      </div>
    );
  }
}

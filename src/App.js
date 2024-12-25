import './App.css';

import React, { Component } from 'react'
import Navbar from './componetnts/navbar';
import News from './componetnts/News';
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

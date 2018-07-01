import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './components/BaseComponent'
import SauceComponent from './components/SauceComponent'
import ToppingsComponent from './components/ToppingsComponent'
import TurboDroneComponent from './components/TurboDroneComponent'
import PriceComponent from './components/PriceComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <BaseComponent />
          <SauceComponent />
          <ToppingsComponent />
          <TurboDroneComponent />
          <PriceComponent />
        </main>
      </div>
    );
  }
}

export default App;

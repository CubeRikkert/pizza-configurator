import React, { Component } from 'react';
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

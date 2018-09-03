import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to Tilla Kairos.</h1>
        </header>
        <p className="App-intro">
          Add Bio here.
        </p>

        <ul>
          <li>add music player component</li>
          <li>add instagram posts</li>
        </ul>
      </div>
    );
  }
}

export default App;

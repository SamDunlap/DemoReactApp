import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a className="topnavname" href="#home">Sam Dunlap</a>
        <a className="topnavcontent" href="#video">Video</a>
        <a className="topnavcontent" href="#stills">Stills</a>
        <a className="topnavcontent" href="#contact">Contact</a>
        <a className="topnavcontent" href="#history">History</a>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Sam
        </a>
      </header>
    </div>
  );
}

export default App;

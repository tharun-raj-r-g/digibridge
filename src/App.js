import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SideNav from './SideNav';
function App() {
  const [iscount,setcount]=useState(0);
  return (
    <div className="App">
      <SideNav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {iscount}
        </a>
      </header>
    </div>
  );
}

export default App;

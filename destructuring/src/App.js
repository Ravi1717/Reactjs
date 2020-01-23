import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ninja from './ninja'
function App() {
  return (
    <div className="App">
      <h1>My first create app</h1>
      <Ninja name="ravi" age="23" hobbies="cricket" />
      <Ninja name="maasuma" age="21" hobbies="dance" />

    </div>
  );
}

export default App;

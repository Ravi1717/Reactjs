import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person'
function app() {
  return (
    <div className="App">
      <h1>Hi,I'm a React App</h1>
      <p>This is really working!!</p>
      <Person></Person>
    </div>
  );
}

export default app;

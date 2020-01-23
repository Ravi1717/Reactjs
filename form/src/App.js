import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addninja from './addninja';
class App extends Component {
  state = {
    ninjas: [
      { name: 'ravi', age: 20, belt: 'brown', id: 1 },
      { name: 'shyam', age: 20, belt: 'black', id: 2 },
      { name: 'sonu', age: 21, belt: 'white', id: 3 }

    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Form Submission App</h1>
        <h2>Welcome</h2>
        <Addninja />

      </div>
    );
  }
}

export default App;

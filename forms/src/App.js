import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninja from './ninja';
import Addninja from './addninja';
class App extends Component {
  state = {
    ninjas: [
      { name: 'ravi', age: 20, belt: 'brown' },
      { name: 'shyam', age: 20, belt: 'black' },
      { name: 'sonu', age: 21, belt: 'white' }

    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Form Submission App</h1>
        <Ninja ninjas={this.state.ninjas} />
        <h2> Welcome</h2>
        <Addninja addNinja={this.addNinja} />

      </div>
    );
  }
}

export default App;

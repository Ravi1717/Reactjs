import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person';
import component from './person';


class App extends Component {
  state = {
    persons: [
      { name: 'ravi', age: 22 },
      { name: 'max', age: 28 },
      { name: 'ram', age: 30 }
    ]
  }
  namechangehandler = (newname) => {
    this.setState({
      persons: [
        { name: newname, age: 22 },
        { name: 'max', age: 28 },
        { name: 'ram', age: 30 }

      ]
    })
  }
  switchchangehandler = (event) => {
    this.setState({
      persons: [
        { name: 'max', age: 22 },
        { name: event.target.value, age: 28 },
        { name: 'ram', age: 30 }

      ]
    })
  }
  render() {
    return (
      <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={() => this.namechangehandler('ravi verma')}> Hello, </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} onchange={this.switchchangehandler} ></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person>
      </div >
    )
  }
}

export default App;

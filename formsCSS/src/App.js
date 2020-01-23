import React, { Component } from 'react';
import Ninjas from './ninja';
import Addninja from './addninja';
import './ninja.css';
class App extends Component {
  state = {
    ninjas: [
      { name: 'Ravi Verma', age: 24, id: 1 },
      { name: 'Shyam Prakash', age: 25, id: 2 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteninja = (id) => {
    //console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Student Database</h1>
        <h2>Form</h2>
        <Ninjas deleteninja={this.deleteninja} ninjas={this.state.ninjas} />
        <Addninja addNinja={this.addNinja} />
      </div>
    )
  }
}
export default App;

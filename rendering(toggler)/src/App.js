import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person';

class App extends Component{
  state = {
    showPerson : true
  }
  togglePersonHandler = ()=>{
    const doesShow = this.state.showPerson;
    console.log(doesShow);
    this.setState({
      showPerson : !doesShow
    })
  }
    render(){
      ///FIRST WAY (PREFERED WAY)
      let person = null;
      if(this.state.showPerson) {
        person = (<div>
          <Person name = "Aman" age = "21" position="Junior - Developer"></Person>
        <Person name = "Shavinder" age = "27" position="Senior FullStack Developer"></Person>
        <Person name = "Ravi" age = "22" position="Junior-Developer"></Person>
        </div>
        )
      }
    return(
      <div>
        <button onClick = {this.togglePersonHandler}>Toggle</button>
        {person}
       {
         ////SECOND WAY
       /* {this.state.showPerson ? 
        <div>
      <Person name='one' age={30} desc='hello'></Person>
      <Person name='two' age={25} desc='hello'></Person>
      <Person name='three' age={20} desc='hello'></Person>
      </div>:null
  }*/}
  </div>
    )
  }
}
export default App;

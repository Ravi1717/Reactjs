import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName } from './actions/myaction';


function App(props) {
  console.log(props)
  return (
    <div className='App'>
      <h1>i am app component</h1>
      <h1>my name is {props.myname}</h1>
      <button onClick={() => { props.changeName() }}>change it</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}
const mapDispatchToProps = (Dispatch) => {
  return {
    /*changeName: (name) => { Dispatch({ type: 'CHANGE_NAME', payload: name }) }*/
    changeName: () => { Dispatch(anotherName()) }          //ASYNCHRONOUS OPERATION
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
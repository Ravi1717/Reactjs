import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName, addwish } from './actions/myaction';


function App(props) {
  const mywish = props.mywish.map(item => {
    return <h2 key={Math.random}>{item}</h2>
  })
  console.log(props)
  return (
    <div className='App'>
      <h1>i am app component</h1>
      <h1>my name is {props.myname}</h1>
      {mywish}
      <button onClick={() => { props.changeName() }}>change it</button>
      <button onClick={() => { props.addwish() }}>add wish</button>

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish
  }
}
const mapDispatchToProps = (Dispatch) => {
  return {
    /*changeName: (name) => { Dispatch({ type: 'CHANGE_NAME', payload: name }) }*/
    changeName: () => { Dispatch(anotherName()) },          //ASYNCHRONOUS OPERATION
    addwish: () => { Dispatch(addwish()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
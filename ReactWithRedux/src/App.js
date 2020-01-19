import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>i am App component</h1>
      <h2>my name is {props.myname}</h2>
      <button onClick={() => { props.changeName('Verma') }}>change name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}
const mapDispatchToprops = (dispatch) => {
  return {
    changeName: (name) => { dispatch({ type: 'CHANGE_NAME', payload: name }) }
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(App);

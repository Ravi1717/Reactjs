import React, { Component } from "react";

class Student extends Component {
  //State without constructor or state property
  state = {
    id: 1,
    name: "rahul"
  };

  //event handler arrow function
  handleclick = (id, e) => {
    console.log(id);
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>hello geekyshows</h1>
        <h1>hello,{this.state.name}</h1>
        <button onClick={this.handleclick.bind(this, this.state.id)}>
          Delete
        </button>
      </div>
    );
  }
}
export default Student;

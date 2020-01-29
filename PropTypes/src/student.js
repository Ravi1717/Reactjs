import React, { Component } from "react";
import { PropTypes as pt } from "prop-types";

class Student extends Component {
  render() {
    return (
      <div>
        <h1>Helllo,{this.props.name}</h1>
        <h2>your roll number:{this.props.roll}</h2>
      </div>
    );
  }
}
Student.propTypes = {
  name: pt.string
};

export default Student;

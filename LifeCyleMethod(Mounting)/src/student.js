import React, { Component } from "react";
import Marks from "./marks";
export default class Student extends Component {
  render() {
    console.log("student is rendered");
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Marks />
      </div>
    );
  }
}

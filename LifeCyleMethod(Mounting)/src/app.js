import React, { Component } from "react";
import Student from "./student";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("APP-Constructore called");
    console.log(props);
    this.state = {
      roll: "101"
    };
  }
  componentDidMount() {
    console.log("App-comDidMount-mounted");
  }

  render() {
    console.log("APP-rendered");
    return (
      <div>
        <Student name="ravi" />
      </div>
    );
  }
}
export default App;

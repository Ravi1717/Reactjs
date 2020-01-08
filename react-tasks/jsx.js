import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Person from './Person/person';

/*class app extends Component{
 state={
    person:[{
      name:'ravi',age:21},
    {name:'aman',age:22},{}

  ]
  };


  nameChangeHandler=(newname)=>{
    this.setState({
      person:[
        {name:newname,age:21},
        {name:'ravi verma',age:22}
      ]
    })
  }

  render(){
    return(
      <div className='AApp'>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>my hobbies to code</Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>my hobbies to code</Person>
        <button onClick={()=>{return this.nameChangeHandler('aman arora')}}>click me</button>
      </div>
       )

  }

}
*/

///USING BIND TO SET METHOD
class app extends Component{
  state={
     person:[{
       name:'ravi',age:21},
     {name:'aman',age:22},{}
 
   ]
   };
 
 
   nameChangeHandler=(newname)=>{

     this.setState({
       person:[
         {name:newname,age:21},
         {name:'ravi verma',age:22}
       ]
     })
   }

   switchnamehandler=(event)=>{

    this.setState({
      person:[
        {name:'aman',age:21},
        {name:event.target.value,age:22}
      ]
    })
   }
 
   render(){
     return(
       <div className='AApp'>
         <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.nameChangeHandler.bind(this, 'Methodrefernce!')}>my hobbies to code</Person>
         <Person name={this.state.person[1].name} age={this.state.person[1].age} change={this.switchnamehandler}>my hobbies to code</Person>
         <button onClick={this.nameChangeHandler.bind(this, 'Max!')}>click me</button>

       </div>
        );
 
   }
 
 }
 


export default app;

ReactDOM.render(<Person/>,document.getElementById('root'));
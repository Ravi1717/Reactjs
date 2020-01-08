import React from 'react';
import ReactDOM from 'react-dom';
function Person(props){
    return(
        <div className='Person'>
            <p>{props.name} {props.age} {props.desc} </p>
            <p>{props.name} {props.age} {props.desc} </p>
            <p>{props.name} {props.age} {props.desc} </p>



        </div>
    )
}
export default Person;
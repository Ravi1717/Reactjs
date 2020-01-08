import React from 'react';
function mycomponent(props){
    return(
        <div className='AApp'>
<h1 onClick={props.click}>my name {props.name} and my age is {props.age}</h1>
<input type='text' onChange={props.change} value={props.name} />
        </div>
    );
};
export default  mycomponent;
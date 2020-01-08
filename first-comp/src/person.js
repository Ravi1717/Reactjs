import React from 'react';
import ReactDOM from 'react-dom';

function component(props) {
    return (
        <div className='App'>
            <ul>
                <li>
                    {props.children}my name is {props.name}
                    <input type='text' onChange={props.onchange} value={props.name}></input>
                </li>
                <li>
                    {props.age}

                </li>
            </ul>
        </div>
    )
}
export default component;
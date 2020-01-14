import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/topic">Topic</a></li>
            </ul>
        </div>
    )
}
export default Header;
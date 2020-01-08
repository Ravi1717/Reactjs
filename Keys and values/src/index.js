/*import React from 'react';
import ReactDOM from 'react-dom';


const items = ["apple", "mango", "grapes", "banana"];


const listitems = [];


for (var i = 0; i < items.length; i++) {
    listitems.push(<li key={i}>{items[i]}</li>)
}


const App = () => {
    return (
        <div>
            <List item={listitems}></List>
        </div>
    )
}


const List = (props) => (
    <ul>{props.item}</ul>
)

ReactDOM.render(<App></App>, document.getElementById('root'));
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';


const items = [
    { name: 'Apple', price: '200' },
    { name: 'Grapes', price: '120' },
    { name: 'Banana', price: '100' },


]


const App = () => {
    return (
        <div>
            <List item={items}></List>
        </div>
    )
}


const List = (props) => {
    const listitems = props.item.map((item, index) => {
        return (
            <li key={index}>{item.name} & price is{item.price}</li>
        )
    })

    return (
        <ul>{listitems}</ul>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));
*/

import React from 'react';
import ReactDOM from 'react-dom';


const items = ['apple', 'banana', 'grapes', 'mango'];

const listitems = [];

for (var i = 0; i < items.length; i++) {
    listitems.push(<li key={i}>{items[i]} </li>);
}
const App = () => {
    return (
        <div>
            <List item={listitems}></List>

        </div>
    )
}
const List = (props) => (
    <ul>{props.item}</ul>
)

ReactDOM.render(<App />, document.getElementById('root'));
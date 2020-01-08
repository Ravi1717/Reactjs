import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const App = () => {
    const items = [
        { name: 'Bread', price: 2.35 },
        { name: 'Milk', price: 2.0 },
        { name: 'Eggs', price: 3.15 },
        { name: 'Tea', price: 4.0 }
    ];
    return (
        <div>
            <List items={items} />
            <Employee name="Aman" age={21} position="Dev" />
            <GroceryList item1="Apples" item2="Oranges" item3="Mangos" />


        </div>
    );
};
const List = (props) => {
    const totalitems = props.items.map((item, index) => {
        return (
            <li key={index}>{item.name} & price is{item.price}</li>
        )
    })

    return (
        <ul>{totalitems}</ul>
    )
}

const Employee = (props) => {
    return (
        <p>My name is {props.name} and my age is {props.age} my positions {props.position}</p>
    )
}

const GroceryList = (props) => {
    return (
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
        </ul>
    )
}


serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById('root'));

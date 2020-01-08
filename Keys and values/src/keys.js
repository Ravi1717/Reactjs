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
    <ul>{props.items}</ul>
)

ReactDOM.render(<App />, document.getElementById('root'));
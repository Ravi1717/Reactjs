import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
/*ReactDOM.render(<h1>hello world</h1>,document.getElementById('root'));*/
                                     
                            //<h1>Hello Chandigarh University</h1>
/*ReactDOM.render(React.createElement('h1',{},'hello ravi'),document.getElementById('root'));*/


/*ReactDOM.render(React.createElement('div',{},React.createElement('h1',{},'hi')),document.getElementById('root'))*/

/*ReactDOM.render(React.createElement('div',{},React.createElement('h1',{className:'APP'},'hi')),document.getElementById('root'))*/

/*
ReactDOM.render(React.createElement('ul',{},React.createElement('li',{},'APPLE'),
                                        React.createElement('li',{},'Banana'),
                                        React.createElement('li',{},'Strawberry'),
                                        React.createElement('li',{},'Grapes'),
                                        ),document.getElementById('root'))   
*/
/*const myelement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  
  ReactDOM.render(myelement, document.getElementById('root'));
  */
 /*
const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const apples = React.createElement('ul', {}, applesPrice);
const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);
const mangosPrice = React.createElement('li', {}, '$2.00 per lb');
const mangos = React.createElement('ul', {}, mangosPrice);
ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'Apples', apples),
    React.createElement('li', {}, 'Oranges', oranges),
    React.createElement('li', {}, 'Mangos', mangos)
  ),
  document.getElementById('root')
);
*/
ReactDOM.render(<App/>,document.getElementById('root'));
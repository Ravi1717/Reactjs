import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screen/home';
import About from './screen/about';
import Topics from './screen/topic';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const App = () => (
    <Router>
        <div>
            <ul>

                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>about us</Link></li>
                <li><Link to='/topic'>Topic</Link></li>

            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topic" component={Topics} />
        </div>
    </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));
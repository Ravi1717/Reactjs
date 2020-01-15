import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screen/home';
import About from './screen/about';
import Favourite from './screen/favouritethings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/favouritethings">Favourite Things</Link></li>
                </ul>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/favouritethings' component={Favourite} />
            </div>
        </Router>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));
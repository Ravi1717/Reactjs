import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screen/home';
import About from './screen/about';
import Topics from './screen/topic';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Notfound from './screen/notfound';

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/topic'>Topic</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/topic' component={Topics} />
                        <Route component={Notfound} />
                    </Switch>
                </div>

            </Router>
        </div>

    )
};
ReactDOM.render(<App />, document.getElementById('root'));
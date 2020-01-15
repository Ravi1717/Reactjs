import React from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from '../topicid';

const Favourite = ({ match }) => {
    return (
        <div>
            <h1>Favourite Things</h1>
            <div>
                <ul>
                    <li><Link to={`${match.url}/cars`}>Favourite Cars</Link></li>
                    <li><Link to={`${match.url}/foods`}>Favourite Food</Link></li>
                    <li><Link to={`${match.url}/movies`}>Favourite Movies</Link></li>
                </ul>
                <Route path={`${match.url}/:topicid`} component={Topic} />
            </div>
            <div>
            </div>
        </div>
    )
};
export default Favourite;
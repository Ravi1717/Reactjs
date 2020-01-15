import React from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './topic';
const Topics = ({ match }) => {
    return (

        <div>
            <h1>In Topics</h1>
            <div>
                <ul>
                    <li><Link to={`${match.url}/rendering`}>Rendering with react</Link></li>
                    <li><Link to={`${match.url}/components`}>Components</Link></li>
                    <li><Link to={`${match.url}/props-v-state`}>Props vs state</Link></li>
                </ul>
                <Route path={`${match.url}/:topicId`} component={Topic} />
            </div>
            <Route exact path={match.url}
                render={() => <h3>Please select a topic</h3>}></Route>
        </div>

    )
}

export default Topics;
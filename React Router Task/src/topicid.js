import React from 'react';
import { Route, Link } from 'react-router-dom';

const Topic = ({ match }) => {
    let item = ' ';
    if (match.params.topicid === 'cars') {
        item = 'BMW'
    }
    else if (match.params.topicid === 'foods') {
        item = 'chicken'
    }
    else if (match.params.topicid === 'movies') {
        item = 'DDLJ'
    }
    return (
        <div>
            <h3>{item}</h3>
        </div>
    )
}
export default Topic;
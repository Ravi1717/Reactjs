import React from 'react';
const Topic = ({ match }) => {
    return (
        <h1>{match.params.topicId}</h1>
    )
}

export default Topic;
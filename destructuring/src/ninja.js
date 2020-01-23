import React, { Component } from 'react';

class Ninja extends Component {
    render() {
        //console.log(this.props)
        const { name, age, hobbies } = this.props;
        return (
            <div className='ninja'>
                <div>Name: {name}</div>
                <div>Age:{age}</div>
                <div>{hobbies}</div>
            </div>
        )
    }
}

export default Ninja;
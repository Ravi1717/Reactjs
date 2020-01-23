import React, { Component } from 'react';

class Addninja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.handlechange} />
                    <label htmlFor='name'>Age:</label>
                    <input type='text' id='age' onChange={this.handlechange} />
                    <label htmlFor='name'>Belt:</label>
                    <input type='text' id='belt' onChange={this.handlechange} />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
export default Addninja;
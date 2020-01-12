import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'ford',
            model: 'endeavour',
            color: 'red'
        };
    };

    changeColor = () => {
        this.setState({
            color: 'blue'
        });
    }
    render() {
        return (
            <div>
                <h1>My car brand is {this.state.brand}</h1>
                <p>
                    It is a {this.state.brand},color is {this.state.color},
                    and model is {this.state.model}
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}>Change color </button>
            </div>
        );
    }
}
ReactDOM.render(<Car />, document.getElementById('root'));
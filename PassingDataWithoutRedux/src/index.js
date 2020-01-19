import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import Profile from './profile';

class App extends React.Component {
    state = {
        name: 'ravi'
    }
    changename(name) {
        this.setState({
            name: name
        });

    }
    render() {
        return (
            <div className='App'>
                <Home handlenamechild={(name) => this.changename(name)} />
                <Profile name={this.state.name} />
                <h1>i am from app: {this.state.name}</h1>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

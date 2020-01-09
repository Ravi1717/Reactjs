/*
   ///SIMPLE PROPS / CLASS PROPS
///handling props in class

import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <div>
            <Hello name='ravi' />
            <Hello name="sourabh" />
            <Hello name="rahul" />
        </div>
    )
}

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,{this.props.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
*/


/*

/// STATE-WORKING


import React from 'react';
import ReactDOM from 'react-dom';

class BankAccount extends React.Component {
    constructor(props) {
        super(props);                 //=>Props are used in React.Component (so we used super class to refer)

        this.state = {
            savings: {
                accountbalance: 5000
            },
            checking: {
                accountbalance: 4111
            }
        };
    }

    render() {
        return (
            <div>
                <h3>
                    savings balance: ${this.state.savings.accountbalance}
                </h3>
                <h3>
                    checking balance:${this.state.checking.accountbalance}
                </h3>
            </div>
        );
    }
}

ReactDOM.render(<BankAccount />, document.getElementById('root'));
*/

import React from 'react';
import ReactDom from 'react-dom';

const App = props => {
    return <BankAccount></BankAccount>
}

class BankAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountbalance: 222.55,
            addamount: 0
        };
    }

    increment() {
        this.setState({
            accountbalance: this.state.accountbalance +
                parseInt(this.state.addamount)
        });
    }

    render() {
        return (
            <div>
                <h3>Account Balance:${this.state.accountbalance}</h3>
                <input
                    type='number'
                    onChange={event => this.setState({ addamount: event.target.value })}
                    value={this.state.addamount}
                />
                <button onClick={this.increment.bind(this)}>Increase Amount</button>

            </div>
        );
    }
}

ReactDom.render(<App></App>, document.getElementById('root'));




import React from 'react';
class Home extends React.Component {
    state = {
        homename: 'Verma'
    }
    render() {
        return (
            <div>
                <h1>i am a homepage</h1>
                <button
                    onClick={() => this.props.handlenamechild(this.state.homename)}>change name
                    </button>
            </div>
        )
    }
}

export default Home;
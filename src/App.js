import React, { Component } from 'react';
import Ride from './components/Ride';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: null,
            // todo : init user id
            userId: '5566dfedab7ad94f288b4576'
        }
    }

    render() {
        return (
            <div className='App'>
                <Ride/>
            </div>
        );
    }
}

export default App;

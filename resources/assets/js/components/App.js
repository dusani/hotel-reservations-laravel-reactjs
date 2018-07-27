import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HotelsList from './HotelsList';

class App extends Component {
    render() {
        return (
            <div className="mt-5">
                <HotelsList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React, { Component } from 'react';
import axios from 'axios';

import Hotel from './Hotel';

export default class HotelsList extends Component {
    state = {
        hotels: []
    };

    componentDidMount() {
        axios.get('api/hotels').then(response => {
            this.setState({
                hotels: response.data.data
            });
        });
    }

    render() {
        const { hotels } = this.state;

        return (
            <div className="container">
                <div className="input-group mb-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for hotels..."
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary">
                            Search
                        </button>
                        <button className="btn btn-outline-secondary">
                            Show All
                        </button>
                    </div>
                </div>

                <ul className="list-group">
                    {hotels.map(hotel => {
                        return <Hotel hotel={hotel} key={hotel.id} />;
                    })}
                </ul>
            </div>
        );
    }
}

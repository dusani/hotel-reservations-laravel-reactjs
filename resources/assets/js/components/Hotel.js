import React, { Component } from 'react';

import ShowRooms from './ShowRooms';

export default class Hotel extends Component {
    state = {
        showRooms: false
    };

    toggleRoomsHandler = () => {
        const roomList = this.state.showRooms;
        this.setState({ showRooms: !roomList });
    };
    render() {
        const { hotel } = this.props;

        let imageStyle = {
            width: '200px',
            height: 'auto'
        };

        let fontBoldStyle = {
            fontWeight: '900'
        };

        let hlineStyle = {
            height: '5px',
            backgroundColor: 'red'
        };

        return (
            <div
                className="row list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 mb-2 bg-white rounded"
                key={hotel.id}
            >
                <div className="col-3">
                    <img
                        src={hotel.image}
                        alt={hotel.name}
                        style={imageStyle}
                    />
                </div>
                <div className="col-6">
                    <p className="h4 text-primary mb-0" style={fontBoldStyle}>
                        {hotel.name}
                        <span className="text-secondary"> | </span>{' '}
                    </p>
                    <p className="text-muted mb-4">{hotel.address}</p>
                    <button
                        onClick={this.toggleRoomsHandler}
                        className="btn btn-warning"
                    >
                        &#9662; Rooms / Availability
                    </button>
                </div>
                <div className="col-3 text-right">
                    <hr style={hlineStyle} />
                    <div className="bg-secondary">
                        <p className="pt-2 my-0 mr-2 text-white">
                            <small>starting at</small>
                        </p>
                        <p className="my-0 mr-2 text-white align-middle">
                            USD{' '}
                            <span className="h3">{hotel.rooms[0].price}</span>{' '}
                        </p>
                        <p className="my-0 pb-3 mr-2 text-white">
                            <small>per room / night</small>
                        </p>
                    </div>
                    <p className="text-muted">*Taxes not included</p>
                </div>
                {this.state.showRooms && <ShowRooms hotelObject={hotel} />}
            </div>
        );
    }
}

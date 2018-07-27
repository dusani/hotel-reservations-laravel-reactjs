import React, { Component } from 'react';

import Room from './Room';

export default class ShowRooms extends Component {
    render() {
        const { hotelObject } = this.props;

        return (
            <div className="container">
                <ul className="list-group">
                    {hotelObject.rooms.map(room => {
                        return <Room room={room} key={room.id} />;
                    })}
                </ul>
            </div>
        );
    }
}

import React, { Component } from 'react';

import RoomDetail from './RoomDetail';

export default class Room extends Component {
    state = {
        showRoomDetail: false
    };

    toggleRoomDetailHandler = () => {
        const roomDetail = this.state.showRoomDetail;
        this.setState({ showRoomDetail: !roomDetail });
    };

    render() {
        const { room } = this.props;

        return (
            <div>
                <div className="list-group-item d-flex shadow-sm p-2 mb-2 bg-white rounded">
                    <div className="col-4">
                        <p>{room.type.toUpperCase()}</p>
                    </div>
                    <div className="col-2">
                        <p>ON REQUEST</p>
                    </div>
                    <div className="col-2">
                        <button
                            onClick={this.toggleRoomDetailHandler}
                            className="btn btn-link"
                        >
                            &#9662;DETAILS
                        </button>
                    </div>
                    <div className="col-2">
                        <p>
                            {room.price}{' '}
                            <small className="text-muted">USD Per Night</small>{' '}
                        </p>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-link">REQUEST</button>
                    </div>
                </div>
                {this.state.showRoomDetail && <RoomDetail roomDetail={room} />}
            </div>
        );
    }
}

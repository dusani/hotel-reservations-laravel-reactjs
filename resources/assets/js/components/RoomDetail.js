import React, { Component } from 'react';

export default class RoomDetail extends Component {
    render() {
        const { roomDetail } = this.props;

        const listStyle = {
            listStyle: 'none'
        };

        const divStyle = {
            width: '100px'
        };

        let hlineStyle = {
            height: '1px',
            backgroundColor: 'blue'
        };

        return (
            <div className="">
                <div className="d-flex">
                    <p className="col-2 text-center">{roomDetail.amenities}</p>
                    <p className="col-10">Occupancy: {roomDetail.occupancy}</p>
                </div>
                <div
                    // className="d-flex flex-column justify-content-center"
                    style={divStyle}
                >
                    <p className="text-center mb-0">
                        <small>Fri, Dec 9</small>
                    </p>
                    <hr className="my-0" style={hlineStyle} />
                    <p className="text-center mt-0">
                        <small>{roomDetail.price} USD</small>
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <ul className="col-8">
                        <li style={listStyle}>
                            <small>Conditions and Offers:</small>
                        </li>
                        <li className="text-muted">
                            <small>Meal Plan: Breakfast Included</small>
                        </li>
                        <li style={listStyle}>
                            <small>Cancellation Policy:</small>
                        </li>
                        <li className="text-danger">
                            <small>
                                Penalty of 1 booked night(s) when cancelling
                                after Nov 25, 2016 04:00 PM
                            </small>
                        </li>
                    </ul>
                    <ul className="col-2 pl-5" style={listStyle}>
                        <li>Price:</li>
                        <li>Taxes 14%:</li>
                        <li>Fees 0.00 p/nt:</li>
                        <li>Total:</li>
                    </ul>
                    <ul className="col-2 text-right pr-4" style={listStyle}>
                        <li>
                            {roomDetail.price}{' '}
                            <span className="text-muted">USD</span>
                        </li>
                        <li>
                            {(roomDetail.price * 0.14).toFixed(2)}{' '}
                            <span className="text-muted">USD</span>
                        </li>
                        <li>
                            0.00 <span className="text-muted">USD</span>
                        </li>
                        <li>
                            {(
                                roomDetail.price +
                                roomDetail.price * 0.14
                            ).toFixed(2)}{' '}
                            <span className="text-muted">USD</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

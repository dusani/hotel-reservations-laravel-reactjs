import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#app');

export default class RequestRoomModal extends Component {
    state = {
        modalIsOpen: true
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };
    onFormSubmit = event => {
        event.preventDefault();
        const reservation = {
            hotel_id: event.target.hotelId.value,
            room_id: event.target.roomId.value,
            room_price: event.target.roomPrice.value,
            room_taxes: event.target.roomTaxes.value,
            room_total_price: event.target.roomTotalPrice.value,
            first_name: event.target.firstName.value,
            last_name: event.target.lastName.value,
            address: event.target.address.value,
            phone_number: event.target.phoneNumber.value,
            email: event.target.email.value,
            credit_card: event.target.creditCard.value,
            cc_exp_month: event.target.ccExpMonth.value,
            cc_exp_year: event.target.ccExpYear.value,
            cc_cvv: event.target.cvv.value
        };
        // console.log(event.target.firstName.value);
        // console.log(reservation);
        axios
            .post('api/reservation', reservation)
            .then(response => {
                console.log(response.data);
                if (response.status === 201) {
                    this.closeModal();
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { showModal, roomDetail } = this.props;

        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel={roomDetail.type}
                style={{
                    overlay: {
                        zIndex: '1000'
                    }
                }}
            >
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <h1 className="font-weight-bold">Reserve this room</h1>
                        <button
                            className="btn btn-link text-danger font-weight-bold"
                            onClick={this.closeModal}
                        >
                            X
                        </button>
                    </div>

                    <div className="d-flex justify-content-between my-4">
                        <h4 className="text-primary font-weight-bold">
                            {roomDetail.type}
                        </h4>
                        <h4 className="">
                            {roomDetail.price}
                            <small className="text-muted"> USD per/night</small>
                        </h4>
                    </div>

                    <hr />

                    <div className="mb-4">
                        <h5 className="font-weight-bold text-center">
                            Customer Information
                        </h5>
                    </div>

                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="John"
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="lasttName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="johndoe@gmail.com"
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="phoneNumber"
                                    placeholder="3051234567"
                                />
                            </div>
                        </div>

                        <div className="form-group mb-5">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                placeholder="1234 Main St, Miami, FL 33101"
                            />
                        </div>

                        {/* <div className="form-row">
                        <div className="form-group col-6">
                            <label htmlFor="inputCity">City</label>
                            <input
                                type="text"
                                className="form-control"
                                name="inputCity"
                                placeholder="Miami"
                            />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="inputState">State</label>
                            <input
                                type="text"
                                className="form-control"
                                name="inputState"
                                placeholder="FL"
                            />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="inputZip">Zip</label>
                            <input
                                type="number"
                                className="form-control"
                                name="inputZip"
                                placeholder="33001"
                            />
                        </div>
                    </div> */}
                        <hr />

                        <div className="mb-4">
                            <h5 className="font-weight-bold text-center">
                                Payment Information
                            </h5>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="creditCard">Credit Card</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="creditCard"
                                    placeholder="4000123456789012"
                                />
                            </div>
                            <div className="form-group col-2">
                                <label htmlFor="ccExpMonth">Exp Month</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="ccExpMonth"
                                    placeholder="01"
                                />
                            </div>
                            <div className="form-group col-2">
                                <label htmlFor="ccExpYear">Exp Year</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="ccExpYear"
                                    placeholder="2018"
                                />
                            </div>
                            <div className="form-group col-2 mb-5">
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="cvv"
                                    placeholder="123"
                                />
                            </div>
                        </div>
                        <input
                            type="hidden"
                            name="hotelId"
                            value={roomDetail.hotel_id}
                        />
                        <input
                            type="hidden"
                            name="roomId"
                            value={roomDetail.id}
                        />
                        <input
                            type="hidden"
                            name="roomPrice"
                            value={roomDetail.price}
                        />
                        <input
                            type="hidden"
                            name="roomTaxes"
                            value={(roomDetail.price * 0.14).toFixed(2)}
                        />
                        <input
                            type="hidden"
                            name="roomTotalPrice"
                            value={(
                                roomDetail.price +
                                roomDetail.price * 0.14
                            ).toFixed(2)}
                        />
                        <button className="btn btn-primary btn-block mt-2">
                            Make Reservation
                        </button>
                    </form>
                </div>
            </Modal>
        );
    }
}

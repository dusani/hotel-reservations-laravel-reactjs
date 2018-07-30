<?php

namespace App\Http\Controllers;

use App\CustomerReservation;
use App\Http\Resources\CustomerReservation as CustomerReservationResource;
use Illuminate\Http\Request;


class CustomerReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reservation = new CustomerReservation;

        $reservation->hotel_id = $request->input('hotel_id');
        $reservation->room_id = $request->input('room_id');
        $reservation->room_price = $request->input('room_price');
        $reservation->room_taxes = $request->input('room_taxes');
        $reservation->room_total_price = $request->input('room_total_price');
        $reservation->first_name = $request->input('first_name');
        $reservation->last_name = $request->input('last_name');
        $reservation->address = $request->input('address');
        $reservation->phone_number = $request->input('phone_number');
        $reservation->email = $request->input('email');
        $reservation->credit_card = $request->input('credit_card');
        $reservation->cc_exp_month = $request->input('cc_exp_month');
        $reservation->cc_exp_year = $request->input('cc_exp_year');
        $reservation->cc_cvv = $request->input('cc_cvv');

        if($reservation->save()) {
            return new CustomerReservationResource($reservation);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CustomerReservation  $customerReservation
     * @return \Illuminate\Http\Response
     */
    public function show(CustomerReservation $customerReservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CustomerReservation  $customerReservation
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomerReservation $customerReservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CustomerReservation  $customerReservation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomerReservation $customerReservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CustomerReservation  $customerReservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerReservation $customerReservation)
    {
        //
    }
}

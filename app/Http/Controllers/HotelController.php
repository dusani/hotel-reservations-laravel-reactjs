<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hotel;
use App\Http\Requests;
use App\Http\Resources\Hotel as HotelResource;
use App\Http\Resources\Room as RoomResource;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $hotels = Hotel::all();

        return HotelResource::collection($hotels);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function showHotel($hotel)
    {
        $hotel = Hotel::find($hotel);

        return new HotelResource($hotel);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Hotel  $hotel $room
     * @return \Illuminate\Http\Response
     */
    public function showRoom($hotel, $room)
    {
        $hotel = Hotel::find($hotel);

        $room = $hotel->rooms[$room];

        return new RoomResource($room);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hotel $hotel)
    {
        //
    }
}

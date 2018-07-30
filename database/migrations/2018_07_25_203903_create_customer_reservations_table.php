<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_reservations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hotel_id');
            $table->integer('room_id');
            $table->integer('room_price');
            $table->integer('room_taxes');
            $table->integer('room_total_price');
            $table->string('first_name');
            $table->string('last_name');
            $table->text('address');
            $table->integer('phone_number');
            $table->string('email');
            $table->integer('credit_card');
            $table->integer('cc_exp_month');
            $table->integer('cc_exp_year');
            $table->integer('cc_cvv');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_reservations');
    }
}

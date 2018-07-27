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
            $table->string('customer_name');
            $table->text('customer_address');
            $table->integer('phone_number');
            $table->integer('cc_number');
            $table->integer('cc_exp_month');
            $table->integer('cc_exp_year');
            $table->integer('cc_cvv');
            $table->text('cc_billing_address');
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

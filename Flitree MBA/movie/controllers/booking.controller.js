const Booking = require("../models/booking.model");

exports.getAllBookings = async ( req, res) => {

    let queryObj = {};


    const bookings = await Booking.find(queryObj);

    res.status(200).send(bookings);
}


exports.getOneBooking = async (req, res) => {

    try{

        const booking = await Booking.findOne({
            _id: req.params.id
        });

        res.status(200).send(booking);

    }catch(err){
        console.log("Error while getting given one booking record", err.message);

        return res.status(500).send({
            message: "Some internal error"
        })
    }
}


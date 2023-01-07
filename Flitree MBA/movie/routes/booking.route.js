const bookingController = require("../controllers/booking.controller")

module.exports = (app)=>{

    app.get("/mba/api/v1/bookings/:id",bookingController.getOneBooking);

    app.get("/mba/api/v1/bookings", bookingController.getAllBookings);

}
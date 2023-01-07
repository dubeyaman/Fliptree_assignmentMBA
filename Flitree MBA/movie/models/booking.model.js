
 const mongoose = require('mongoose');
 
 
 const bookingSchema = new mongoose.Schema({
    totalCost: {
        type: Number,
        required: true
    },
    theatreId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref : "Theatre"
    },
    movieId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref : "Movie"
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref : "User"
    },
    ticketBookedTime: {
        type: Date,
        required: true,
        immutable : true
    },
    noOfSeats: {
        type: Number,
        required: true
    },
    
 }, { timestamps : true , versionKey : false});
 
 module.exports = mongoose.model("Booking", bookingSchema);
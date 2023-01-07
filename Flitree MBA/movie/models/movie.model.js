const mongoose = require("mongoose");


const movieSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    casts : {
        type : [String],
        required : true
    },
    trailerUrls : {
        type : [String],
        required : true
    },
    posterUrls : {
        type : [String],
        required : true
    },
    languages : {
        type : [String],
        required : true
    },
    releaseDate :{
        type : Date,
        required : true
    },
    
    imdbRating :{
        type : Number
    },
    
    theatres : {
        type : [mongoose.SchemaTypes.ObjectId],
        default : [],
        ref : "Theatre"
    },
    bookings : {
        type : [mongoose.SchemaTypes.ObjectId],
        default : [],
        ref : "Booking"
    }
},{ timestamps : true , versionKey : false});



module.exports = mongoose.model("Movie" , movieSchema);
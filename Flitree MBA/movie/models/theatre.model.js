const  mongoose = require("mongoose");


const theatreSchema = new mongoose.Schema({

    
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
  
    numberOfSeats : {
        type : Number,
        required : true
    },
   
},{ timestamps : true , versionKey : false});

module.exports = mongoose.model("Theatre" , theatreSchema);
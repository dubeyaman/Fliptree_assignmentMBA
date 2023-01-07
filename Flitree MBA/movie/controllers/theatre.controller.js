
const Theatre = require('../models/theatre.model')

 
exports.createNewTheatre = async (req,res)=>{
    try{
        const data = {
            
            name : req.body.name,
            description : req.body.description,
            city : req.body.city,
            numberOfSeats : req.body.numberOfSeats
        }
    
        const theatre = await Theatre.create(data);
        

        console.log(`#### New theatre '${theatre.name}' created ####`);
        res.status(201).send(theatre);


    }catch(err){
        console.log("#### Error while creating new theatre #### ", err);
        res.status(500).send({
            message : "Internal server error while creating new theatre"
        });
    }
}



 
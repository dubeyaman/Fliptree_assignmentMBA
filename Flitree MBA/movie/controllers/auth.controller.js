const bcrypt = require('bcryptjs');
const User = require('../models/user.model')



exports.signup = async (req,res)=>{

    const userObj = {
        name : req.body.name,
        userId : req.body.userId,
        email : req.body.email,
       
        password : bcrypt.hashSync(req.body.password, 8),
        
    };

    try{
        const userCreated = await User.create(userObj);

        console.log(`#### ${userCreated.email} ${userCreated.name} created ####`);
        res.status(201).send("user registered succesfully");
    }catch(err){
        console.log("#### error while user sign up #### ", err.message);
        res.status(500).send({
            message : "Internal server error while creating user"
        });
    }
}

exports.signin = async (req,res)=>{
    try{
        const user = await User.findOne({email : req.body.email})
        if(!user){
            return res.status(400).send({
                message : "Failed! userId passed dosen't exist"
            });
        }
        
      

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid){
            return res.status(401).send({
                message : "Wrong password"
            });
        }

      
        res.status(200).send({
            name : user.name,
            userId : user.userId,
            email : user.email,
           
        });
    }catch(err){
        console.log("#### Error while user sign in ##### ", err.message);
        res.status(500).send({
            message : "Internal server error while user signin"
        });
    }
}


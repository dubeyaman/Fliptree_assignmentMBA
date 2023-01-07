 const Movie = require('../models/movie.model')
 
 
 exports.createNewMovie = async (req,res)=>{
    try{
        const data = {
            name : req.body.name,
            description : req.body.description,
            casts : req.body.casts,
            trailerUrls : req.body.trailerUrls,
            posterUrls : req.body.posterUrls,
            languages : req.body.languages,
            releaseDate : req.body.releaseDate,
           
            imdbRating : req.body.imdbRating,
            
        }
    
        const movie = await Movie.create(data);

        console.log(`#### New Movie '${movie.name}' created ####`);
        res.status(201).send(movie);


    }catch(err){
        console.log("#### Error while creating new movie #### ", err);
        res.status(500).send({
            message : "Internal server error while creating new movie"
        });
    }
}

 
exports.getAllMovies = async (req,res)=>{
    try{
        const movies = await Movie.find();
    
        res.status(200).send(movies);
    
    }catch(err){
        console.log("#### Error while getting all movies ####", err.message);
        res.status(500).send({
            message : "Internal server error while getting all movies"
        })
    }
}

exports.getSingleMovie = async (req,res)=>{

    try{
        const movie = req.movieInParams;
    
        res.status(200).send(movie);
    
    }catch(err){
        console.log("#### Error while getting the movie ####", err.message);
        res.status(500).send({
            message : "Internal server error while getting the movie"
        })
    }

}

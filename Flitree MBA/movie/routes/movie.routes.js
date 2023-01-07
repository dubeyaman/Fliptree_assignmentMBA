 const movieController = require('../controllers/movie.controller');


 module.exports = (app)=>{
     app.post("/mba/api/v1/movies", movieController.createNewMovie);
     
     app.get("/mba/api/v1/movies", movieController.getAllMovies)
     app.get("/mba/api/v1/movies/:id", movieController.getSingleMovie)
 }
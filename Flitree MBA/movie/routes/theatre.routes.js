const theatreController = require('../controllers/theatre.controller')


 
module.exports = (app)=>{
    app.post("/mba/api/v1/theatres",theatreController.createNewTheatre);
    
}
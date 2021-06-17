module.exports = app =>{
    const booking = require("../controllers/Booking.controller");
    var router = require("express").Router();

    router.get("/:id", booking.findAll);
    router.post("/", booking.create);
    
    app.use('/booking', router);
}
module.exports = app =>{
    const booking = require("../controllers/Booking.controller");
    var router = require("express").Router();

    router.get("/:id", booking.findAll);
    router.post("/", booking.create);
    router.get("/QR/:codeQR", booking.findByQR);
    
    app.use('/booking', router);
}
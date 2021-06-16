module.exports = app =>{
    const booking = require("../controllers/Booking.controller");
    var router = require("express").Router();

    router.get("/booking/", booking.findAll);
    router.get("/booking/:id", booking.findOne);
    router.post("/booking/", booking.create);
}
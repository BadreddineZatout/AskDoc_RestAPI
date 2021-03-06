module.exports = app =>{
    const booking = require("../controllers/Booking.controller");
    var router = require("express").Router();

    router.get("/patient/:id", booking.findByPatient);
    router.get("/findByDoctor/:id/:date", booking.findAll);
    router.post("/", booking.create);
    router.get("/:id", booking.findByDoc);
    router.get("/QR/:codeQR", booking.findByQR);
    
    app.use('/booking', router);
}

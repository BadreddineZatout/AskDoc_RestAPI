module.exports = app =>{
    const doctor = require("../controllers/Doctor.controller");
    var router = require("express").Router();

    router.get("/", doctor.findAll);
    router.post("/", doctor.create);
    router.post("/auth", doctor.findAuth);
    router.get("/:id", doctor.findOne);

    app.use('/doctor', router);
}
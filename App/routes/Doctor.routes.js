module.exports = app =>{
    const doctor = require("../controllers/Doctor.controller");
    var router = require("express").Router();

    router.get("/doctor/", doctor.findAll);
    router.post("/doctor/Auth", doctor.findAuth);
    router.get("/doctor/:id", doctor.findOne);
}
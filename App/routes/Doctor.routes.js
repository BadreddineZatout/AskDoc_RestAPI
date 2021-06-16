module.exports = app =>{
    const doctor = require("../controllers/Doctor.controller");
    var router = require("express").Router();

    router.post("/Auth", doctor.findAuth);

    router.get("/:id", doctor.findOne);
}
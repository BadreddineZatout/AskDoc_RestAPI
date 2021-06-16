module.exports = app =>{
    const Patient = require("../controllers/Patient.controller");
    var router = require("express").Router();

    router.post("/patient/Auth", Patient.findAuth);
    router.get("/patient/:id", Patient.findOne);
}
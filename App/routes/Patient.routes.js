module.exports = app =>{
    const Patient = require("../controllers/Patient.controller");
    var router = require("express").Router();

    router.post("/Auth", Patient.findAuth);
    router.post("/", Patient.create);
    router.get("/:id", Patient.findOne);

    app.use('/patient', router)

}
module.exports = app =>{
    const traitement = require("../controllers/Traitement.controller");
    var router = require("express").Router();

    router.post("/", traitement.create);
    router.get("/", traitement.findAll);
    router.get("/offline", traitement.findAllOffline);

    app.use('/traitement', router);
}
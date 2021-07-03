module.exports = app =>{
    const traitement = require("../controllers/Traitement.controller");
    var router = require("express").Router();

    router.post("/", traitement.create);
    router.get("/", traitement.findAll);
    router.get("/offline", traitement.findAllOffline);
    router.put("/offline", traitement.updateOffline)

    app.use('/traitement', router);
}
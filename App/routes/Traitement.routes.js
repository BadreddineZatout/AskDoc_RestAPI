module.exports = app =>{
    const traitement = require("../controllers/Traitement.controller");
    var router = require("express").Router();

    router.post("/", traitement.create);
    router.get("/:id", traitement.findAll);

    app.use('/traitement', router);
}
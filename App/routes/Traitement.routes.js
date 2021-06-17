module.exports = app =>{
    const traitement = require("../controllers/Traitement.controller");
    var router = require("express").Router();

    router.get("/:id", traitement.findAll);

    app.use('/traitement', router);
}
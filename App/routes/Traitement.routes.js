module.exports = app =>{
    const traitement = require("../controllers/Traitement.controller");
    var router = require("express").Router();

    router.get("/traitement/", traitement.findAll);
    router.get("/traitement/:id", traitement.findOne);
}
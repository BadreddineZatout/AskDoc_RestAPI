module.exports = app =>{
    const conseil = require("../controllers/Conseil.controller");
    var router = require("express").Router();

    router.get("/conseil/", conseil.findAll);
    router.get("/conseil/:id", conseil.findOne);
    router.post("/conseil/", conseil.create);
}
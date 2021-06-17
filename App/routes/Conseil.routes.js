module.exports = app =>{
    const conseil = require("../controllers/Conseil.controller");
    var router = require("express").Router();

    router.get("/", conseil.findAll);
    router.get("/:iddoc/:idpat", conseil.findOne);
    router.post("/", conseil.create);

    app.use('/conseil', router);
}
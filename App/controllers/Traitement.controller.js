const db = require("../models");
const Traitement = db.traitements;

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Traitement.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

  exports.findAll = (req, res) => {  
    Traitement.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
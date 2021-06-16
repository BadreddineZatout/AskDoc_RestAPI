const db = require("../models");
const Conseil = db.conseils;

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const conseil = {
    iddoc: req.body.iddoc,
    idpat: req.body.idpat,
    text: req.body.text,
    isSyncronized: false
  };

  Conseil.create(conseil)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Conseil.findByPk(id)
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
    Conseil.findAll()
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
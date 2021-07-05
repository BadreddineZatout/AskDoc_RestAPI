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

  const conseils = req.body;
  Conseil.bulkCreate(conseils)
    .then(data => {
      res.send({
        data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Conseil."
      });
    });
};

  exports.findOne = (req, res) => {
    const iddoc = req.params.iddoc;
    const idpat = req.params.idpat;
  
    Conseil.findAll({
      where: {
        iddoc: iddoc,
        idpat: idpat
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Conseil with id=" + id
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
            err.message || "Some error occurred while retrieving conseils."
        });
      });
  };

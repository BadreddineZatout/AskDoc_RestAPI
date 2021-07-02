const db = require("../models");
const Patient = db.patients;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Save Patient in the database
  Patient.create(req.body)
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
exports.findAuth = (req, res) => {
    const tel = req.body.tel;
    const pdw = req.body.pdw;
    Patient.findAll({
        where: {
            tel: tel,
            pdw: pdw
        }
     })
      .then(data => {
        if (data.length > 0){
          res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving patients."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Patient.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Patient with id=" + id
        });
      });
  };
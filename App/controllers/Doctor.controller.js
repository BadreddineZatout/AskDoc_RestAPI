const db = require("../models");
const Doctor = db.doctors;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Save Doctor in the database
  Doctor.create(req.body)
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
    Doctor.findAll({
        where: {
            tel: tel,
            pdw: pdw
        }
     })
      .then(data => {
        if (data.length > 0){
          res.send({
            message: 1
          });
        }else{
          res.send({
            message: 0
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving doctor."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Doctor.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving doctor with id=" + id
        });
      });
  };

  exports.findAll = (req, res) => {  
    Doctor.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving doctors."
        });
      });
  };
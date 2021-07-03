const db = require("../models");
const Traitement = db.traitements;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Save Doctor in the database
  Traitement.create(req.body)
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

  exports.findAll = (req, res) => { 
    const id = req.params.id;

    Traitement.findAll({
      attributes: ['treatmentId', 'disease', 'treatmentDescription', 'treatmentBeginDate', 'treatmentEndDate', 'bookingId']
    })
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
  exports.findAllOffline = (req, res) => { 
    const id = req.params.id;

    Traitement.findAll({
      where: {isOffline: false},
      attributes: ['treatmentId', 'disease', 'treatmentDescription', 'treatmentBeginDate', 'treatmentEndDate', 'bookingId', 'patientId', 'isOffline']
    })
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

  exports.updateOffline = (req, res) => {
    Traitement.update(
      {isOffline: true}, {where : {isOffline: false}}
    ).then(num => {
      if (num == 1) {
        res.send({
          message: "Offline update succeded"
        });
      } else {
        res.status(400).send({
          message: `Ofdline update failed`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating"
      });
    });
  }
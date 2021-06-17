const db = require("../models");
const Traitement = db.traitements;

  exports.findAll = (req, res) => { 
    const id = req.params.id;

    Traitement.findAll({
      where: {bookingId: id},
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
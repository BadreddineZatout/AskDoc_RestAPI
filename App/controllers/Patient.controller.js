const db = require("../models");
const Patient = db.patients;

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
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
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
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };
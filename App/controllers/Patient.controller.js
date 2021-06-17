const db = require("../models");
const Patient = db.patients;

exports.findAuth = (req, res) => {
    const tel = req.body.tel;
    const pdw = req.body.pdw;
    Patient.findAll({
        where: {
            tel: tel,
            pdw: pdw
        },
        attributes: ['id', 'name', 'tel']
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
            err.message || "Some error occurred while retrieving patients."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Patient.findByPk(id, {attributes: ['id', 'name', 'tel']})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Patient with id=" + id
        });
      });
  };
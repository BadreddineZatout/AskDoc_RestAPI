const db = require("../models");
const Doctor = db.doctors;

exports.findAuth = (req, res) => {
    const tel = req.body.tel;
    const pdw = req.body.pdw;
    Doctor.findAll({
        where: {
            tel: tel,
            pdw: pdw
        },
        attributes: ['doctorId', 'name', 'tel', 'spec', 'lat', 'lng', 'exp', 'image']
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
  
    Doctor.findByPk(id, {attributes: ['doctorId', 'name', 'tel', 'spec', 'lat', 'lng', 'exp', 'image']})
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
    Doctor.findAll({attributes: ['doctorId', 'name', 'tel', 'spec', 'lat', 'lng', 'exp', 'image']})
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
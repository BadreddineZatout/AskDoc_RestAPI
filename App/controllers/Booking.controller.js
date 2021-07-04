const db = require("../models");
const Booking = db.bookings;
const Patient = db.patients;

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const booking = {
    bookingDate: req.body.bookingDate,
    bookingTime: req.body.bookingTime,
    doctorId: req.body.doctorId,
    patientId: req.body.patientId,
    patientName: req.body.patientName,
    CodeQR: req.body.CodeQR
  };

  Booking.create(booking)
    .then(data => {
      res.send({
        message: 'Booking created successfully!'
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Booking."
      });
    });
};

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Booking.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Booking with id=" + id
        });
      });
  };

  exports.findAll = (req, res) => {  
    const id = req.params.id
    Booking.findAll({
      where: {doctorId: id}
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bookings."
        });
      });
  };
  exports.findByQR = (req, res) => {
    const codeQR = req.params.codeQR
    Booking.findOne({
      where: {CodeQR: codeQR}
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bookings."
        });
      });
  }
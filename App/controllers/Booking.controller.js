const db = require("../models");
const Booking = db.bookings;

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
    CodeQR: req.body.CodeQR
  };

  Booking.create(booking)
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
  
    Booking.findByPk(id)
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
    Booking.findAll()
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
const sequelize = require("sequelize");
const db = require("../models");
const Booking = db.bookings;
const Doctor = db.doctors;
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
    bookingHour: req.body.bookingHour,
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

  exports.findAll = async (req, res) => { 
    const id = req.params.id;
    const date = req.params.date;
    try{
      let doctor  = await Doctor.findByPk(id)
      let doctorBookings = await Booking.findAll({
        attributes:[
          'bookingHour',
          [sequelize.fn('COUNT', sequelize.col('bookingId')), 'countBookings'],
        ],
        where: {
          bookingDate: date,
          doctorId: id
        },
        group: ['bookingHour'],
        order: ['bookingHour']
      })
      if (doctorBookings != null){
        let obj_string = JSON.stringify(doctorBookings)
        let obj_json = JSON.parse(obj_string)
        let doctorBookingsAdapter = new Map()
        obj_json.forEach(element => {
          doctorBookingsAdapter.set(element.bookingHour,parseInt(element.countBookings))
        });
        console.log(doctorBookingsAdapter)
        const maxBookings = doctor.bookingsByHour
        let obj =[]
        console.log(doctor.startAt)
        for(let i = doctor.startAt;i<doctor.finishAt;i++){
          if(typeof doctorBookingsAdapter.get(i) != 'undefined'){
            if (doctorBookingsAdapter.get(i)<maxBookings){
              obj.push(i)
              console.log(i)
            }
          }
          else{
            obj.push(i)
          }
        }
        res.send(obj)
      }
    }
    catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    }
  };

  exports.findByDoc = (req, res) => {  
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

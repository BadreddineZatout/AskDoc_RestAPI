module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
        bookingId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bookingDate: {
        type: Sequelize.STRING
      },
      bookingHour: {
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      patientName:{
        type: Sequelize.STRING
      },
      CodeQR: {
        type: Sequelize.STRING
      },
      isOffline:{
        type: Sequelize.BOOLEAN
      }
    });
    return Booking;
  };
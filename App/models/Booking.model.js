module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
        bookingId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bookingDate: {
        type: Sequelize.DATE
      },
      bookingTime: {
        type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      CodeQR: {
        type: Sequelize.STRING
      }
    });
    return Booking;
  };
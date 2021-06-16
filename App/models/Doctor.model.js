module.exports = (sequelize, Sequelize) => {
    const Doctor = sequelize.define("doctor", {
      doctorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      pdw: {
        type: Sequelize.STRING
      },
      spec: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DOUBLE
      },
      lng: {
        type: Sequelize.DOUBLE
      },
      exp: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      }
    });
  
    return Doctor;
  };
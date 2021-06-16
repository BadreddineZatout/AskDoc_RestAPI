module.exports = (sequelize, Sequelize) => {
    const Traitement = sequelize.define("traitment", {
        treatmentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      disease: {
        type: Sequelize.STRING
      },
      treatmentDescription: {
        type: Sequelize.STRING
      },
      treatmentBeginDate: {
        type: Sequelize.DATE
      },
      treatmentEndDate: {
        type: Sequelize.DATE
      },
      bookingId: {
        type: Sequelize.INTEGER
      }
    });
    return Traitement;
  };
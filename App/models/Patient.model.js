module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
      id: {
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
      }
    });
  
    return Patient;
  };
module.exports = (sequelize, Sequelize) => {
    const Conseil = sequelize.define("conseil", {
        iddoc: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      idpat: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      text: {
        type: Sequelize.STRING
      },
      isSyncronized: {
        type: Sequelize.BOOLEAN
      }
    });
    return Conseil;
  };
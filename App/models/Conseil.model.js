module.exports = (sequelize, Sequelize) => {
    const Conseil = sequelize.define("conseil", {
        iddoc: {
        type: Sequelize.INTEGER,
      },
      idpat: {
        type: Sequelize.INTEGER,
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
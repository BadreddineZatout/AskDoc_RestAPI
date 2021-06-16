const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.doctors = require("./Doctor.model.js")(sequelize, Sequelize);
db.patients = require("./Patient.model.js")(sequelize, Sequelize);
db.bookings = require("./Booking.model.js")(sequelize, Sequelize);
db.traitements = require("./Traitement.model.js")(sequelize, Sequelize);
db.conseils = require("./Conseil.model.js")(sequelize, Sequelize);

module.exports = db;

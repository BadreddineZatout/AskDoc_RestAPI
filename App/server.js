const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models");

var corsOptions = {
  origin: "http://localhost:8081"
};

db.sequelize.sync();
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));                              
require('./routes/Doctor.routes')(app)
require('./routes/Patient.routes')(app)
require('./routes/Booking.routes')(app)
require('./routes/Conseil.routes')(app)
require('./routes/Traitement.routes')(app)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

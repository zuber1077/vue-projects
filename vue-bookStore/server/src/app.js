const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

/* DB */
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* ROUTES */
require('./routes')(app)

sequelize.sync({force: false})
.then(() => {
  app.listen(config.port);
  console.log(`Express running → PORT ${config.port}`);
});
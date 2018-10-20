const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  res.send({
    message: `hrllo ${req.body.email} sgf`
  })
});

app.set('port', process.env.PORT || 8082);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
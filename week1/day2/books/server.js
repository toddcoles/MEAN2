const express = require('express');
const parser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = process.env.PORT || 8000;

const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
};

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(logger('dev'));
app.use(cookieParser('aslkdjfhlaksjdhflkajsdhflasjkdhf'));
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'dist')));

require('./server/config/database');

app.use('/api', require('./server/config/routes'));

app.use(require('./server/config/routes/catch-all.route'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const defaultRouter = require('./routes/defaultRouter')
const app = express()
const session = require('express-session');

app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(session({
  secret:'Jane-Shop',
  saveUninitialized: true,
  resave: true
}));

app.use('/', defaultRouter);

app.listen(3000, function () {
    console.log('API LISTENNING ON PORT 3000')
});

var express = require(`express`);

var consign = require('consign');

var app = express();

app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

//app.use(express.validator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
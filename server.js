var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();

// connect to mongodb
mongoose.connect( process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/charity' );

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // set static files location
app.use(morgan('dev')); // log every request to console
app.use(bodyParser()); // for post request params
app.use(methodOverride()); // for DELETE and PUT methods

app.set('port', process.env.PORT || 3000);

// require routes
require('./routes/register')(app);

// start server
app.listen(app.get('port'));
console.log('Server listeing at port ' + app.get('port'));

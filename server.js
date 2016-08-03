/**
 * Created by Jonathan on 06/06/2016.
 */
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = require('./model/db'),
    site = require('./model/sites');

app.use(express.static(__dirname + "/app"));
var sites = require('./routes/sites');
app.use('/sites', sites);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
});

// error handlers
// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
//};

app.disable('etag');

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 3000;        // set our port
app.listen(port, function() {
    console.log('listening on ' + port)
});
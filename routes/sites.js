/**
 * Created by jduggan on 29/06/2016.
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

//build the REST operations at the base for sites
//this will be accessible from http://127.0.0.1:3000/sites if the default route for / is left unchanged
router.route('/')
//GET all sites
    .get(function(req, res, next) {
        mongoose.model('Site').find({}, function (err, sites) {
            if (err) {
                return console.error(err);
            } else {
                //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                res.json(sites);
            }
        });
    })
    //POST a new siteDefinition
    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var siteDefinition = req.body.siteDefinition;
        var googleSheetId = req.body.googleSheetId;
        //call the create function for our database
        mongoose.model('Site').create({
            siteDefinition : siteDefinition,
            googleSheetId : googleSheetId
        }, function (err, site) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            } else {
                //Site has been created
                console.log('POST creating new site: ' + site);
                res.json(site);
            }
        })
    });

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model('Site').findById(id, function (err, site) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.json({message : err.status  + ' ' + err});
        } else {
            //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
            //console.log(site);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next();
        }
    });
});

router.route('/:id')
    .get(function(req, res) {
        mongoose.model('Site').findById(req.id, function (err, site) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                console.log('GET Retrieving ID: ' + site._id);
                res.json(site);
            }
        });
    })
    .put(function(req, res) {
        // Get our REST or form values. These rely on the "name" attributes
        var siteDefinition = req.body.siteDefinition;
        //find the document by ID
        mongoose.model('Site').findById(req.id, function (err, site) {
            //update it
            site.update({
                siteDefinition : siteDefinition
            }, function (err, siteID) {
                if (err) {
                    res.send("There was a problem updating the information to the database: " + err);
                }
                else {
                    res.json(site);
                }
            })
        });
    })
    //DELETE a site by ID
    .delete(function (req, res){
        //find site by ID
        mongoose.model('Site').findById(req.id, function (err, site) {
            if (err) {
                return console.error(err);
            } else {
                //remove it from Mongo
                site.remove(function (err, site) {
                    if (err) {
                        return console.error(err);
                    } else {
                        //Returning success messages saying it was deleted
                        console.log('DELETE removing ID: ' + site._id);
                        res.json({message : 'deleted',
                            item : site
                        });
                    }
                });
            }
        });
    });
module.exports = router;
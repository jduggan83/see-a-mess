/**
 * Created by jduggan on 29/06/2016.
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'), //used to manipulate POST
    sitesService = require('../services/sitesService');

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));

//build the REST operations at the base for sites
//this will be accessible from http://127.0.0.1:3000/sites if the default route for / is left unchanged
router.route('/')
//GET all sites
    .get(function(req, res, next) {
        sitesService.findAll().then(function(sites){
            res.json(sites);
        }).catch(function(err){
            return console.error(err);
        });
    })
    //POST a new siteDefinition
    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        sitesService.save(req.body).then(function(site){
            console.log('POST creating new site: ' + site);
            res.json(site);
        }).catch(function(err){
            res.send("There was a problem adding the information to the database.");
        });
    });

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //find the ID in the Database
    sitesService.findById(req.id).then(function(sites){
        req.id = id;
        next();
    }).catch(function(err){
        console.log(id + ' was not found');
        res.status(404);
        var err = new Error('Not Found');
        err.status = 404;
        res.json({message : err.status  + ' ' + err});
    });
});

router.route('/:id')
    .get(function(req, res) {
        sitesService.findById(req.id).then(function(sites){
            console.log('GET Retrieving ID: ' + site._id);
            res.json(site);
        }).catch(function(err){
            console.log('GET Error: There was a problem retrieving: ' + err);
        });
    });

router.route('/query-by-googleSheetId')
    .get(function(req, res) {
        sitesService.findByGoogleSheetId(req.googleSheetId).then(function(sites){
            console.log('GET Retrieving ID: ' + site._id);
            res.json(site);
        }).catch(function(err){
            console.log('GET Error: There was a problem retrieving: ' + err);
        });
    });

module.exports = router;
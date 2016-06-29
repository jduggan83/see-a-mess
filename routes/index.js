/**
 * Created by jduggan on 29/06/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
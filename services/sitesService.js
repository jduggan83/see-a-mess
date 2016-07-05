/**
 * Created by jduggan on 05/07/2016.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var siteModel = mongoose.model('Site');

module.exports.findAll = function(){
    return siteModel.find({});
};

module.exports.findById = function(id){
    return siteModel.findById(id);
};

module.exports.findByGoogleSheetId = function(googleSheetId){
    var query = siteModel.findOne({googleSheetId: googleSheetId});
    return query.exec();
};

module.exports.save = function(site){
    if(site._id == null){
        return siteModel.create(site);
    }else{
        return this.findById(site._id).then(function(originalSite){
            if(originalSite != null) {
                return originalSite.update(site);
            }else{
                return siteModel.create(site);
            }
        });
    }
};


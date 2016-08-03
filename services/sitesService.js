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
    return this.findByGoogleSheetId(site.googleSheetId).then(function(originalSite){
        if(originalSite != null) {
            originalSite.siteDefinition[site.siteItem] = site.siteItemObject;
            return originalSite.save();
        }else{
            var newSite = {
                googleSheetId: site.googleSheetId,
                siteDefinition: {
                }
            };
            newSite.siteDefinition[site.siteItem] = site.siteItemObject;
            return siteModel.create(newSite);
        }
    });
};


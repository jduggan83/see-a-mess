/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.mongodb', []);

services.factory('mongoDBSiteDefinitionService', ['$q', '_', '$http', 'CONFIG', function($q, _, $http, CONFIG) {
    var siteDefinition = null;

    return {
        initialise: function(siteId){
            return $http.get('/sites/query-by-googleSheetId?googleSheetId='+siteId).then(function(response){
                siteDefinition = response.siteDefinition;
                _id = response._id;
            });
        },
        publish:  function(siteDefinition){
            var site = {
                googleSheetId: CONFIG.siteId,
                siteDefinition: siteDefinition
            };

            if(_id == null){

            }

            return $http.post('/sites', site).then(function(response){
                _id = response._id;
                return response;
            });
        }
    };
}]);
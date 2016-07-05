/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.mongodb', []);

services.factory('mongoDBSiteDefinitionService', ['$q', '_', '$http', 'CONFIG', function($q, _, $http, CONFIG) {
    var _id = null;

    return {
        initialise: function(siteId){
            return $http.get('/sites/query-by-googleSheetId?googleSheetId='+siteId)
        },
        publish:  function(site){
            return $http.post('/sites', site);
        }
    };
}]);
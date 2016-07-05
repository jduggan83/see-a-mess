/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.mongodb', []);

services.factory('mongoDBSiteDefinitionService', ['$q', '_', '$http', 'CONFIG', function($q, _, $http, CONFIG) {
    return {
        initialise: function(){
            return $http.get('/sites/query-by-googleSheetId?googleSheetId='+ CONFIG.siteId).then(function(response){
                return response.data.siteDefinition;
            });
        },
        publish:  function(site){
            return $http.post('/sites', site);
        }
    };
}]);
/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.google', []);

services.factory('googleSiteDefinitionService', ['$q', '_', 'CONFIG', function($q, _, CONFIG) {
    return {
        initialise: function(){
            var defer = $q.defer();

            Tabletop.init({
                key: CONFIG.siteId,
                callback: function(doc){
                    console.log("Initialised googleSheetService " + CONFIG.siteId);
                    var site = {
                        siteDefinition: doc
                    };
                    defer.resolve(site);
                },
                simpleSheet: false
            });
            return defer.promise;
        }
    };
}]);
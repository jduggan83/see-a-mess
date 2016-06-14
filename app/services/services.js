/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('services', []);

services.factory('googleSheetService', ['$q', '_', function($q, _) {
    var siteDefinition = null;

    return {
        initialise: function(googleSheetId){
            var defer = $q.defer();

            Tabletop.init({
                key: googleSheetId,
                callback: function(doc){
                    siteDefinition = doc;
                    console.log("Initialised googleSheetService");
                    defer.resolve();
                },
                simpleSheet: false
            });

            return defer.promise;
        },
        getApplicationInfo: function(){
            return siteDefinition['global'].elements;
        },
        getPages: function(){
            return siteDefinition['pages'].elements;
        },
        getPageItems: function(page){
            return _.where(siteDefinition['articles'].elements, {page: page});
        },
        getWidgetData: function(widgetId, type){
            return _.where(siteDefinition[type].elements, {id: widgetId})[0];
        }
    };
}]);
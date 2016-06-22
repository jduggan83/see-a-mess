/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.mongodb', []);

services.factory('mongoDBSiteDefinitionService', ['$q', '_', function($q, _) {
    var siteDefinition = null;

    return {
        initialise: function(googleSheetId){
            var defer = $q.defer();            

            return defer.promise;
        },
        getApplicationInfo: function(){
            
        },
        getPages: function(){
			
        },
        getPageItems: function(page){
            
        },
        getArticleData: function(article){
			
        },
        getTableData: function(id){
            
        },
        getCustomType: function(article){			
			            
        }
    };
}]);
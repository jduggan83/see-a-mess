/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('services', []);

services.factory('googleSheetService', ['$routeParams','$q', function($routeParams, $q) {
    var service = null;
    var id = '1-89z0TsK7V1ubO3zzLMZriQqAnyDcwZe7G1jes7VPfk';

    function get(){
        var defer = $q.defer();
        if(service==null){
            Tabletop.init({
                key: id,
                callback: function(doc){
                    service = doc;
                    defer.resolve(service);
                    console.log("Initialised googleSheetService")
                },
                simpleSheet: false
            });
        }else{
            defer.resolve(service);
        }

        return defer.promise;
    }

    return get();
}]);
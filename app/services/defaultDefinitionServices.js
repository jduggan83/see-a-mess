/**
 * Created by jduggan on 02/08/2016.
 */
var services = angular.module('app.services.default', []);

services.factory('defaultSiteDefinitionService', ['$q', '_', '$http', 'CONFIG', function($q, _, $http, CONFIG) {
    return {
        initialise: function(){
            return $q.resolve({
                "global": {
                    "elements": [
                        {
                            "title": "See A Mess"
                        }
                    ]
                },
                "pages": {
                    "elements": [
                        {
                            "id": "home",
                            "title": "Home",
                            "parent-page": ""
                        }
                    ]
                },
                "articles": {
                    "elements": [
                        {
                            "id": "welcome",
                            "type": "container",
                            "size":	"3",
                            "title": "Welcome to See A Mess",
                            "page": "home"
                        }
                    ]
                },
                "container": {
                    "elements": [
                        {
                            "id": "welcome",
                            "style": "jumbotron",
                            "size":	"",
                            "content": "All your CMS needs are finally solved!!",
                            "textAlign": "center",
                            "image": ""
                        }
                    ]
                }
            });
        }
    };
}]);
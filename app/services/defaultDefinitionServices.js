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
                            "title": "About",
                            "parent-page": ""
                        },
                        {
                            "id": "get-started",
                            "title": "Get Started",
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
                            "css": "text-align: center;",
                            "page": "home"
                        },
                        {
                            "id": "step-1",
                            "type": "featurette",
                            "title": "Step 1",
                            "page": "get-started"
                        },
                        {
                            "id": "step-2",
                            "type": "featurette",
                            "title": "Step 2",
                            "page": "get-started"
                        },
                        {
                            "id": "step-3",
                            "type": "featurette",
                            "title": "Step 3",
                            "page": "get-started"
                        }
                    ]
                },
                "container": {
                    "elements": [
                        {
                            "id": "welcome",
                            "style": "jumbotron",
                            "size":	"",
                            "content": '<p>All your CMS needs are finally solved!!</p><a target="_blank" href="/?mode=PREVIEW&siteId=1-89z0TsK7V1ubO3zzLMZriQqAnyDcwZe7G1jes7VPfk" class="btn btn-primary">View Live Demo</a>',
                        }
                    ]
                },
                "featurette": {
                    "elements": [
                        {
                            "id": "step-1",
                            "subTitle": "This is so easy to create",
                            "content": 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
                            "imageposition": "left",
                            "image": "http://1.bp.blogspot.com/-glzIpdKUoKc/UPFyioQU_qI/AAAAAAAACDw/zPIwG5oV1-Y/s1600/Milford+Sound+thu%E1%BB%99c+C%C3%B4ng+vi%C3%AAn+Qu%E1%BB%91c+gia+Fiorland,+ph%C3%ADa+T%C3%A2y+Nam+New+Zealand.jpg"
                        },
                        {
                            "id": "step-2",
                            "subTitle": "This is so easy to create",
                            "content": 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
                            "imageposition": "right",
                            "image": "http://1.bp.blogspot.com/-glzIpdKUoKc/UPFyioQU_qI/AAAAAAAACDw/zPIwG5oV1-Y/s1600/Milford+Sound+thu%E1%BB%99c+C%C3%B4ng+vi%C3%AAn+Qu%E1%BB%91c+gia+Fiorland,+ph%C3%ADa+T%C3%A2y+Nam+New+Zealand.jpg"
                        },
                        {
                            "id": "step-3",
                            "subTitle": "This is so easy to create",
                            "content": 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
                            "imageposition": "left",
                            "image": "http://1.bp.blogspot.com/-glzIpdKUoKc/UPFyioQU_qI/AAAAAAAACDw/zPIwG5oV1-Y/s1600/Milford+Sound+thu%E1%BB%99c+C%C3%B4ng+vi%C3%AAn+Qu%E1%BB%91c+gia+Fiorland,+ph%C3%ADa+T%C3%A2y+Nam+New+Zealand.jpg"
                        }
                    ]
                }
            });
        }
    };
}]);
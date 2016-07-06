/**
 * Created by Jonathan on 06/06/2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('cms', [
    'ngRoute',
    'ngSanitize',
	'ngAnimate',
	'ngTouch',
	'ui.bootstrap',
    'underscore',
    'controllers',
    'app.services.common',
    'app.services.mongodb',
    'app.services.google',
    'app.filters'
]).
config(['$provide', '$locationProvider', '$routeProvider', function($provide, $locationProvider, $routeProvider) {	
	
	var CONFIG = {
		"parentTypes": ["jumbotron", "carousel"],
		"isParentType": function(type){
			return this.parentTypes.indexOf(type) > -1;
		}		
	};
	
	var params = window.location.search.substring(1).split('&');
    	
	for (var i = 0; i < params.length; i++) {
        var pair = params[i].split('=');
        CONFIG[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
	
	$provide.value('CONFIG', CONFIG);
	
	$routeProvider
        .when('/:pageId', {
            templateUrl : 'views/page.html'
        })

        .when('/article/:articleId', {
            templateUrl : 'views/article.html'
        })
}]);
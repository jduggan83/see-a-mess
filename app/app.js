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
    'app.services.google'
]).
config(['$provide', '$locationProvider', '$routeProvider', function($provide, $locationProvider, $routeProvider) {	
	
	var CONFIG = {
		mode: 'PREVIEW',
		siteId: '1-89z0TsK7V1ubO3zzLMZriQqAnyDcwZe7G1jes7VPfk'
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
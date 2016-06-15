/**
 * Created by Jonathan on 06/06/2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('cms', [
    'ngRoute',
    'ngSanitize',
    'underscore',
    'controllers',
    'services'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/:pageId', {
            templateUrl : 'views/page.html'
        })

        .when('/article/:articleId', {
            templateUrl : 'views/article.html'
        })
}]);
/**
 * Created by jduggan on 29/07/2016.
 */
var directives = angular.module('directives',[]);

directives.directive('compile', ['$compile', function ($compile) {
    return function(scope, element, attrs) {
        scope.$watch(
            function(scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
            }
        );
    };
}]);

directives.directive('component', function () {
    return {
        restrict: 'E',
        scope: {
            article: '=',
            type: '@'
        },
        templateUrl: function(element, attrs) {
            return "components/" + attrs.type + "/" + attrs.type + ".html";
        },
        link: function ($scope, element, attrs) {

        }
    }
});
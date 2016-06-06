/**
 * Created by Jonathan on 06/06/2016.
 */
var controllers = angular.module('controllers',[]);

controllers.controller('MenuController', ['$scope', '$routeParams', 'googleSheetService', function($scope, $routeParams, googleSheetService) {
    $scope.menuItems = [];

    googleSheetService.then(function(doc){
        $scope.menuItems = doc.Sheet1.elements;
    });

    $scope.isActive = function(pageId){
        return $routeParams.pageId == pageId;
    }
}]);

controllers.controller('PageController', ['$scope', 'googleSheetService','$routeParams', function($scope, googleSheetService, $routeParams) {
    $scope.articles = [];
    $scope.featuredArticle = {};

    googleSheetService.then(function(doc){
        angular.forEach(doc[$routeParams.pageId].elements, function(element){
            if(element.top == "yes"){
                $scope.featuredArticle = element;
            }else{
                $scope.articles.push(element);
            }
        });
    });
}]);
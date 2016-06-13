/**
 * Created by Jonathan on 06/06/2016.
 */
var controllers = angular.module('controllers',[]);

controllers.controller('MenuController', ['$scope', '$routeParams', '$location', 'googleSheetService', function($scope, $routeParams, $location, googleSheetService) {
    $scope.menuItems = [];

    googleSheetService.initialise(location.search.split('id=')[1]).then(function(){
        $scope.menuItems = googleSheetService.getPages();
        $location.path('/'+$scope.menuItems[0].id)
    });

    $scope.isActive = function(pageId){
        return $routeParams.pageId == pageId;
    };
}]);

controllers.controller('PageController', ['$scope', 'googleSheetService','$routeParams', function($scope, googleSheetService, $routeParams) {
    $scope.articles = googleSheetService.getPageItems($routeParams.pageId);
}]);
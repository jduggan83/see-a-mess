/**
 * Created by Jonathan on 06/06/2016.
 */
var controllers = angular.module('controllers',[]);

controllers.controller('MenuController', ['$scope', '$routeParams', '$location', 'googleSheetService', function($scope, $routeParams, $location, googleSheetService) {
    $scope.menuItems = [];

    googleSheetService.initialise(location.search.split('id=')[1]).then(function(){
        $scope.menuItems = googleSheetService.getPages();
        $scope.app = googleSheetService.getApplicationInfo();
        $location.path('/'+$scope.menuItems[0].id);
    });

    $scope.isActive = function(pageId){
        return $routeParams.pageId == pageId;
    };
}]);

controllers.controller('PageController', ['$scope', 'googleSheetService','$routeParams', '_', function($scope, googleSheetService, $routeParams, _) {
    $scope.articles = googleSheetService.getPageItems($routeParams.pageId);

    _.each($scope.articles, function(article){
        article = googleSheetService.getArticleData(article);

    });

    $scope.getComponentPath = function(type){
        return 'components/' + type + '/' + type + '.html';
    };
}]);

controllers.controller('ArticleController', ['$scope', 'googleSheetService','$routeParams', '_', function($scope, googleSheetService, $routeParams, _) {
    $scope.article = googleSheetService.getArticleData({id: $routeParams.articleId, type: $routeParams.type});
}]);
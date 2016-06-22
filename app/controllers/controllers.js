/**
 * Created by Jonathan on 06/06/2016.
 */
var controllers = angular.module('controllers',[]);

controllers.controller('MenuController', ['$scope', '$routeParams', '$rootScope', '$location', 'siteDefinitionService', function($scope, $routeParams, $rootScope, $location, siteDefinitionService) {
    $scope.menuItems = [];

    siteDefinitionService.initialise().then(function(){
		$rootScope.$broadcast('siteDefinitionService::initialised');
		
        $scope.menuItems = siteDefinitionService.getPages();
        $scope.app = siteDefinitionService.getApplicationInfo();
        if($location.path() === ""){
			$location.path('/'+$scope.menuItems[0].id);
		}
    });

    $scope.isActive = function(pageId){
        return $routeParams.pageId == pageId;
    };
}]);

controllers.controller('PageController', ['$scope', 'siteDefinitionService','$routeParams', '_', function($scope, siteDefinitionService, $routeParams, _) {
    
	$scope.articles = [];
	
	if(!siteDefinitionService.initialised()){
		$scope.$on('siteDefinitionService::initialised', function() {
			getArticles();
		});
	}else{
		getArticles();
	}
		
	function getArticles(){
		$scope.articles = siteDefinitionService.getPageItems($routeParams.pageId);
		_.each($scope.articles, function(article){
			article = siteDefinitionService.getArticleData(article);
		});
	}	

    $scope.getComponentPath = function(type){
        return 'components/' + type + '/' + type + '.html';
    };
}]);

controllers.controller('ArticleController', ['$scope', 'siteDefinitionService','$routeParams', '_', function($scope, siteDefinitionService, $routeParams, _) {
    $scope.article = {};
	
	if(!siteDefinitionService.initialised()){
		$scope.$on('siteDefinitionService::initialised', function() {
			getArticle();
		});
	}else{
		getArticle();
	}
	
	function getArticle(){
		$scope.article = siteDefinitionService.getArticleData({id: $routeParams.articleId, type: $routeParams.type});
	}	
}]);
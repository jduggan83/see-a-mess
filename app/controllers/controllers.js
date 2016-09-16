/**
 * Created by Jonathan on 06/06/2016.
 */
var controllers = angular.module('controllers',[]);

controllers.controller('GlobalAppController', ['$scope', '$routeParams', '$rootScope', '$location', 'siteDefinitionService', 'CONFIG', function($scope, $routeParams, $rootScope, $location, siteDefinitionService, CONFIG) {
	$scope.isLoading = true;
	$scope.menuItems = [];
	$scope.showPublish = false;
	$scope.demoMode = (CONFIG.demoMode == 'true');

	$scope.publish = {};
	$scope.publish.show = (CONFIG.mode == 'PREVIEW');
	$scope.publish.status = "READY";
	$scope.publish.url = location.protocol + '//' + location.host + '?siteId=' + CONFIG.siteId;

	$scope.publish.publishSite = function(){
		$scope.publish.status = "PUBLISHING";
		siteDefinitionService.publish().then(function(){
			$scope.publish.status = "PUBLISHED";
		}).catch(function(error){
			$scope.publish.status = "ERROR";
		});
	};

    siteDefinitionService.initialise().then(function(){
		$rootScope.$broadcast('siteDefinitionService::initialised');
        $scope.menuItems = siteDefinitionService.getPages();
        $scope.app = siteDefinitionService.getApplicationInfo();

		if($scope.app.css.substring(0, 4) === 'http'){
			$scope.app.cssFile = $scope.app.css;
		}else{
			$scope.app.style = $scope.app.css;
		}
		
		if($location.path() === ""){
			$location.path('/'+$scope.menuItems[0].id);
		}
		$scope.isLoading = false;
    });

    $scope.isActive = function(pageId){
		return $routeParams.pageId == pageId;
	};

	$scope.changeTheme = function(theme, themeDescription){
		$scope.app.theme = theme;
		$scope.app.themeDescription = themeDescription;
	}
}]);

controllers.controller('PageController', ['$scope', 'siteDefinitionService','$routeParams', '_', function($scope, siteDefinitionService, $routeParams, _) {
	$scope.page = {};
	$scope.articles = [];
	
	if(!siteDefinitionService.initialised()){
		$scope.$on('siteDefinitionService::initialised', function() {
			getArticles();
			$scope.page = siteDefinitionService.getPageDetail($routeParams.pageId);
		});
	}else{
		getArticles();
		$scope.page = siteDefinitionService.getPageDetail($routeParams.pageId);
	}
		
	function getArticles(){
		$scope.articles = siteDefinitionService.getPageItems($routeParams.pageId);
		_.each($scope.articles, function(article){
			article = siteDefinitionService.getArticleData(article);
		});
		generateArticleHTML();
	}

	function generateArticleHTML(){
		var html = '';
		var openRow = false;
		for(var i=0; i< $scope.articles.length; i++){
			var article =  $scope.articles[i];

			if(isFullWidthComponent(article)){
				if(openRow){
					html += '</div></div>';
					openRow = false;
				}
				html += '<div style="'+article.css+'"><component article="articles['+ i +']" type="'+ article.type +'"></component></div>';
			}else{
				if(!openRow){
					html += '<div class="container"><div class="row">';
					openRow = true;
				}
				html += '<div class="col-md-' + getArticleSize(article) + '">';
				html += '<div class="row-item" style="'+article.css+'"><component article="articles['+ i +']" type="'+ article.type +'"></component></div>';
				html += '</div>';
			}
		}
		$scope.html = html;
	}

	function isFullWidthComponent(article){
		if (article.type == 'featurette'
			|| (article.style == 'jumbotron' && (article.size == null ||article.size == '' ))
			|| (article.type == 'carousel' && (article.size == null || article.size == ''))) {
			return true;
		}
		return false;
	}

	function getArticleSize(article){
		var size = article.size;

		if(size == null || size ==''){
			return 12;
		}

		return size * 4;
	}
}]);

controllers.controller('ArticleController', ['$scope', 'siteDefinitionService','$routeParams', '_', 'CONFIG', function($scope, siteDefinitionService, $routeParams, _, CONFIG) {
    $scope.article = {};
	$scope.articleUrl = window.location.href;
	
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
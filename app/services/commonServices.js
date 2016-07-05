/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.common', []);

services.factory('siteDefinitionService', ['$q', '_', '$injector', 'CONFIG', function($q, _, $injector, CONFIG) {
	var retrievalService = null;
	var siteDefinition = null;

	if(CONFIG.mode == "PREVIEW"){
		retrievalService = $injector.get('googleSiteDefinitionService');
	}else{
		retrievalService =  $injector.get('mongoDBSiteDefinitionService');
	}

	function createRequestObject(){
		var siteDefinitionObject = {};

		for(siteItem in siteDefinition){
			var item = {};
			item.elements = siteDefinition[siteItem].elements;
			item.column_names = siteDefinition[siteItem].column_names;
			siteDefinitionObject[siteItem] = item;
		};

		return {
			googleSheetId: CONFIG.siteId,
			siteDefinition: siteDefinitionObject
		};
	}

	return {
		initialised: function(){
			return siteDefinition != null;
		},
		initialise: function(){
			return retrievalService.initialise().then(function(definition){
				siteDefinition = definition;
			});
		},
		getApplicationInfo: function(){
			return siteDefinition['global'].elements[0];
		},
		getPages: function(){
			var pages = _.filter(siteDefinition['pages'].elements, function(page) {
				return page['parent-page'] === '';
			});

			_.each(siteDefinition['pages'].elements, function(page){
				if(page['parent-page'] !== ''){
					var parentPage = _.where(siteDefinition['pages'].elements, {id: page['parent-page']})[0];
					if(parentPage!=null){
						if(parentPage.subPages==null){
							parentPage.subPages = [];
						}
						parentPage.subPages.push(page);
					}
				}
			});

			return pages;
		},
		getPageItems: function(page){
			return _.where(siteDefinition['articles'].elements, {page: page});
		},
		getArticleData: function(article){
			var me = this;
			article = _.where(siteDefinition['articles'].elements, {id: article.id})[0];

			if(siteDefinition[article.type] != null){
				if(CONFIG.isParentType(article.type)){
					var dataItems = _.where(siteDefinition[article.type].elements, {id: article.id});
					var subArticles = [];

					_.each(dataItems, function(item){
						subArticles.push(me.getArticleData({id: item.article}));
					});

					article.subArticles = subArticles;

				}else{
					var widgetInfo = _.where(siteDefinition[article.type].elements, {id: article.id})[0];
					_.extend(article, widgetInfo);
				}
			}

			if(siteDefinition[article.id] != null){
				article.data = me.getTableData(article.id);
			}

			me.getCustomType(article);
			return article;
		},
		getTableData: function(id){
			var tableData = {};
			tableData.headers = siteDefinition[id].column_names;
			tableData.items = siteDefinition[id].elements;
			return tableData;
		},
		getCustomType: function(article){
			var customType = _.where(siteDefinition['custom-type'].elements, {id: article.type});

			if(customType != null && customType[0] != null){
				article.type = "custom-type";
				article.customContent = customType[0].content;
			}
		},
		publish:  function(){
			return $injector.get('mongoDBSiteDefinitionService').publish(createRequestObject());
		}
	};
}]);
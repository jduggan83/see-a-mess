/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('services', []);

services.factory('googleSheetService', ['$q', '_', function($q, _) {
    var siteDefinition = null;

    return {
        initialise: function(googleSheetId){
            var defer = $q.defer();

            Tabletop.init({
                key: googleSheetId,
                callback: function(doc){
                    siteDefinition = doc;
                    console.log("Initialised googleSheetService");
                    defer.resolve();
                },
                simpleSheet: false
            });

            return defer.promise;
        },
        getApplicationInfo: function(){
            return siteDefinition['global'].elements[0];
        },
        getPages: function(){
            return siteDefinition['pages'].elements;
        },
        getPageItems: function(page){
            return _.where(siteDefinition['articles'].elements, {page: page});
        },
        getArticleData: function(article){
			var me = this;
			
            article = _.where(siteDefinition['articles'].elements, {id: article.id})[0];

            if(siteDefinition[article.type] != null){
                
				if(article.type == "jumbotron" || article.type == "carousel"){
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
                article.tableData = me.getTableData(article.id);
            }

            return article;
        },
        getTableData: function(id){
            var tableData = {};
            tableData.headers = siteDefinition[id].column_names;
            tableData.items = siteDefinition[id].elements;
            return tableData;
        }
    };
}]);
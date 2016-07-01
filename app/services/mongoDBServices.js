/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.mongodb', []);

services.factory('mongoDBSiteDefinitionService', ['$q', '_', '$http', 'CONFIG', function($q, _, $http, CONFIG) {
    var siteDefinition = null;

    return {
        initialise: function(siteId){
            return $http.get('/sites/query-by-googleSheetId?googleSheetId='+siteId).then(function(response){
                siteDefinition = response.siteDefinition;
                _id = response._id;
            });
        },
        publish:  function(siteDefinition){
            var site = {
                googleSheetId: CONFIG.siteId,
                siteDefinition: siteDefinition
            };

            if(_id == null){

            }

            return $http.post('/sites', site).then(function(response){
                _id = response._id;
                return response;
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
        }
    };
}]);
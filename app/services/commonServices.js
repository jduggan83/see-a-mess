/**
 * Created by Jonathan on 06/06/2016.
 */
var services = angular.module('app.services.common', []);

services.factory('siteDefinitionService', ['$q', '_', '$injector', 'CONFIG', function($q, _, $injector, CONFIG) {
    var _id = null;

	if(CONFIG.mode == "PREVIEW"){
		return $injector.get('googleSiteDefinitionService');
	}else{
		return $injector.get('mongoDBSiteDefinitionService');
	}		
}]);
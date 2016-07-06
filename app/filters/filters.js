/**
 * Created by Jonathan on 06/07/2016.
 */
var filters = angular.module('app.filters', []);

filters.filter('fullWidthComponent', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.type == 'featurette' || item.type == 'jumbotron' || (item.type == 'carousel' && item.size == '')) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

filters.filter('columnComponent', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if ((item.type != 'featurette' && item.type != 'jumbotron' && item.type != 'carousel') || (item.type == 'carousel' && item.size != '')) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});
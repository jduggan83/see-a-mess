/**
 * Created by jduggan on 02/08/2016.
 */
var services = angular.module('app.services.default', []);

services.factory('defaultSiteDefinitionService', ['$q', '_', '$http', 'CONFIG', function($q, _, $http, CONFIG) {
    return {
        initialise: function(){
            return $q.resolve({
                "global": {
                    "elements": [
                        {
                            "title": "See A Mess"
                        }
                    ]
                },
                "pages": {
                    "elements": [
                        {
                            "id": "home",
                            "title": "About",
                            "parent-page": ""
                        },
                        {
                            "id": "get-started",
                            "title": "Get Started",
                            "parent-page": ""
                        }
                    ]
                },
                "articles": {
                    "elements": [
                        {
                            "id": "welcome",
                            "type": "container",
                            "size":	"3",
                            "title": "Welcome to See A Mess",
                            "css": "text-align: center;",
                            "page": "home"
                        },
                        {
                            "id": "about-1",
                            "type": "container",
                            "size":	"1",
                            "title": "Use Google Drive",
                            "css": "text-align: center;",
                            "page": "home"
                        },
                        {
                            "id": "about-2",
                            "type": "container",
                            "size":	"1",
                            "title": "Awesome Styling",
                            "css": "text-align: center;",
                            "page": "home"
                        },
                        {
                            "id": "about-3",
                            "type": "container",
                            "size":	"1",
                            "title": "Endless Possibilites",
                            "css": "text-align: center;",
                            "page": "home"
                        },
                        {
                            "id": "step-1",
                            "type": "featurette",
                            "title": "Step 1",
                            "page": "get-started"
                        },
                        {
                            "id": "step-2",
                            "type": "featurette",
                            "title": "Step 2",
                            "page": "get-started"
                        },
                        {
                            "id": "step-3",
                            "type": "featurette",
                            "title": "Step 3",
                            "page": "get-started"
                        }
                    ]
                },
                "container": {
                    "elements": [
                        {
                            "id": "welcome",
                            "style": "jumbotron",
                            "content": '<p>All your website needs are finally solved</p><a target="_blank" href="/?siteId=1-89z0TsK7V1ubO3zzLMZriQqAnyDcwZe7G1jes7VPfk" class="btn btn-primary">View Live Demo</a>',
                        },
                        {
                            "id": "about-1",
                            "style": "",
                            "image": "data:image/jpeg;base64,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",
                            "content": 'Integrate your website with Google Drive. Use a google spreadsheet as the driver for designing your website with a clean and easy format.',
                        },
                        {
                            "id": "about-2",
                            "style": "",
                            "image": "data:image/jpeg;base64,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",
                            "content": 'Easy to use bootstrap components for a slick and stylish display. Implement complex eye-catching elements like a carousel, a featurette, or tables for presentation of data in a clear and elegant way.',
                        },
                        {
                            "id": "about-3",
                            "style": "",
                            "image": "data:image/png;base64,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",
                            "content": 'Create custom widgets using HTML and CSS that can be reused throughout your website. Avail of twitter bootstrap styles, or introduce your own styling.',
                        }
                    ]
                },
                "featurette": {
                    "elements": [
                        {
                            "id": "step-1",
                            "subTitle": "Upload the template to Drive",
                            "content": 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
                            "imageposition": "left",
                            "image": "https://doc-00-5o-docs.googleusercontent.com/docs/securesc/krarign92t4dkfe53rpvnahch3plmjt3/j9kjmruitrohpgqrbap6c04i7lh4ma9j/1470218400000/17807566080320603348/17807566080320603348/0B-BDAJg-gbgwZllLQUZzQzA1c0E?e=view&nonce=sbise543nj4tk&user=17807566080320603348&hash=vac3db8uds2stg5fsde5c828oftt7uee"
                        },
                        {
                            "id": "step-2",
                            "subTitle": "This is so easy to create",
                            "content": 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
                            "imageposition": "right",
                            "image": "http://1.bp.blogspot.com/-glzIpdKUoKc/UPFyioQU_qI/AAAAAAAACDw/zPIwG5oV1-Y/s1600/Milford+Sound+thu%E1%BB%99c+C%C3%B4ng+vi%C3%AAn+Qu%E1%BB%91c+gia+Fiorland,+ph%C3%ADa+T%C3%A2y+Nam+New+Zealand.jpg"
                        },
                        {
                            "id": "step-3",
                            "subTitle": "This is so easy to create",
                            "content": 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
                            "imageposition": "left",
                            "image": "http://1.bp.blogspot.com/-glzIpdKUoKc/UPFyioQU_qI/AAAAAAAACDw/zPIwG5oV1-Y/s1600/Milford+Sound+thu%E1%BB%99c+C%C3%B4ng+vi%C3%AAn+Qu%E1%BB%91c+gia+Fiorland,+ph%C3%ADa+T%C3%A2y+Nam+New+Zealand.jpg"
                        }
                    ]
                }
            });
        }
    };
}]);
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
                            "title": "Endless Possibilities",
                            "css": "text-align: center;",
                            "page": "home"
                        },
                        {
                            "id": "step-1",
                            "type": "featurette",
                            "title": "Step 1",
                            "page": "get-started",
                            "css": "background-color: #eee"
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
                            "page": "get-started",
                            "css": "background-color: #eee"
                        }
                    ]
                },
                "container": {
                    "elements": [
                        {
                            "id": "welcome",
                            "style": "jumbotron",
                            "content": '<p>All your website needs are finally solved</p><a target="_blank" href="/?mode=PREVIEW&siteId=1-89z0TsK7V1ubO3zzLMZriQqAnyDcwZe7G1jes7VPfk" class="btn btn-primary">View Live Demo</a>',
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
                            "image": "data:image/jpeg;base64,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",
                            "content": 'Create custom widgets using HTML and CSS that can be reused throughout your website. Avail of twitter bootstrap styles, or introduce your own styling.',
                        }
                    ]
                },
                "featurette": {
                    "elements": [
                        {
                            "id": "step-1",
                            "subTitle": "Save to Google Drive",
                            "content": 'Download the template for creating your very first See A Mess website <a target="_blank" href="https://docs.google.com/spreadsheets/d/1-89z0TsK7V1ubO3zzLMZriQqAnyDcwZe7G1jes7VPfk/edit#gid=1870654690">here</a>. Then, save this file to your own personal google drive.',
                            "imageposition": "left",
                            "image": "https://doc-00-5o-docs.googleusercontent.com/docs/securesc/krarign92t4dkfe53rpvnahch3plmjt3/j9kjmruitrohpgqrbap6c04i7lh4ma9j/1470218400000/17807566080320603348/17807566080320603348/0B-BDAJg-gbgwZllLQUZzQzA1c0E?e=view&nonce=sbise543nj4tk&user=17807566080320603348&hash=vac3db8uds2stg5fsde5c828oftt7uee"
                        },
                        {
                            "id": "step-2",
                            "subTitle": "Publish the Template",
                            "content": 'Publish the saved spreadsheet to the web by choosing the option on Google Sheets. Take note of the link that your spreadsheet is viewable at.',
                            "imageposition": "right",
                            "image": "https://doc-10-5o-docs.googleusercontent.com/docs/securesc/krarign92t4dkfe53rpvnahch3plmjt3/9huh7iolhq3q5gi0baqpf940upe36ovo/1470225600000/17807566080320603348/17807566080320603348/0B-BDAJg-gbgwWWNsb1luQ3JSaDg?e=view"
                        },
                        {
                            "id": "step-3",
                            "subTitle": "Enjoy Your New Site",
                            "content": '<p>Your new site can be previewed at:</p><p>see-a-mess.azurewebsites.net?mode=PREVIEW&siteId=<b>[ID from step 2]</b></p>Once you are happy with your new website design, you can publish it for all to see.',
                            "imageposition": "left",
                            "image": "https://doc-0o-5o-docs.googleusercontent.com/docs/securesc/krarign92t4dkfe53rpvnahch3plmjt3/jrn95jmphbifp3jfjqtoam8cmrr8hfds/1470225600000/17807566080320603348/17807566080320603348/0B-BDAJg-gbgwRW1wRTZkYXdQTDA"
                        }
                    ]
                }
            });
        }
    };
}]);
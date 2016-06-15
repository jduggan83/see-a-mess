### See-a-Mess

A google spreadsheet based CMS. The CMS is designed to operate as an online service only requiring a reference to a spreadsheet published from google drive. 

To use this CMS, no hosting of any of the base html content is required, just a google drive account that will host a spreadsheet containing the site definition. Any additional content can also be stored on google drive and then referenced in the spreadsheet like images, word docs, css files, etc.

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`
    
#### Install & Build

    $ npm install -g bower
    $ npm install
    $ bower install

#### Debugging the app

    $ npm run dev
    
#### Running the app

    $ npm start

#### Todo

 - complete remaining types - table, list-group, carousel, thumnail, pic with side content (as per example) 
 - view full article, from alert, panel and container
 - loading custom templates with properties
 - publish contents to mongo DB, for production mode
 - styling on each component
 
#### Ideas

 - look at app page for specifying name, layout
 - use LESS at runtime to specify colors etc
 - establih a few different page layout patterns to be chosen
 - Look downloading a few different themes that can be selected
 - link for a custom css file that can be published
 - a spinner cover entire screen while excel is loading

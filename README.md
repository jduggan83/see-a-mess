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

 - sub menus when specifying parent id
 - publish contents to mongo DB, for production mode
 - loading custom templates with properties

 - fix carousel
 - solve issue with jumbotron
 - add thumbnail or pic to container option
 - fix issue where entry point has to be at root
 - limit content, if readmore

 - blog style for view article
 - styling options on each component
 - a spinner cover entire screen while excel is loading
 - A header and footer - can go in global

 
#### Nice to have

 - use LESS at runtime to specify colors etc
 - Look downloading a few different themes that can be selected
 - link for a custom css file that can be published
 - enhance layout options - grid, blog etc...
 - menu component to go to page, or full page article. Then maybe implement hide, for item in pages sheet

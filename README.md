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

 - limit content, if readmore for a container
 - loading custom templates with properties
 - publish contents to mongo DB, for production mode
 
 - decide on component breakdown - featurette, container and all that
 - more styling options on each component
 - blog style for view article - and include the image
 
#### Nice to have

 - A header and footer - can go in global
 - a spinner cover entire screen while excel is loading
 - use LESS at runtime to specify colors etc
 - Look downloading a few different themes that can be selected
 - link for a custom css file that can be published
 - enhance layout options - grid, blog etc...
 - menu component to go to page, or full page article. Then maybe implement hide, for item in pages sheet

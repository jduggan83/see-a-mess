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

 - fix publish payload issue
 - fix image in carousel not working
 - fix how order works with items like jumbotron
 
#### Next Phase

 - a map or iframe object
 - more styling options on each component
 - a spinner cover entire screen while excel is loading
 - use LESS at runtime to specify for gloabal style variables
 - ability to choose a theme
 - link to a custom css file of a theme
 - For user editing, have a give me html piece to create a custom element of this and paste in html to change - have think about best way to do this (powerful idea here)
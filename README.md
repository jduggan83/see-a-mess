### See-A-Mess

A google spreadsheet based CMS. The CMS is designed to operate as an online service only requiring a reference to a spreadsheet published from google drive. To use this CMS, no hosting of any of the base html content is required, just a google drive account that will host a spreadsheet which contains the site definition. 

Any additional content can also be stored on google drive and then referenced in the spreadsheet like images, word docs, css files, etc.

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`
    
#### Install

    $ npm install -g bower
    $ npm install
	$ bower install

#### Debugging the app

    $ npm run dev
    
#### Building the app

    $ npm start

#### Ideas
 - Id for a custom css file that published
 - id for images etc, or is there a better way to link them?
 - look into how web components can be referenced 

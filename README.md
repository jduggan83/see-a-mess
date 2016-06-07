### See-A-Mess

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

#### Ideas and todo
 - look at app page for specifying name, layout
 - use LESS at runtime to specify colors etc
 - establih a few different page layout patterns to be chosen
 - go through all components on bootstrap site and attempt to have these types available from sheet
 - id for images etc, or is there a better way to link them?
 - Look downloading a few different themes that can be selected
 - Id for a custom css file that can be published
 - look into how web components can be referenced - use one as an example
 - if spreadsheet becomes too big, have dev mode reading from sheet and then publish to a mongo db for prod mode
 - a spinner cover entire screen while excel is loading

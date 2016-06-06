### Just Todo It

A todo list app written using Polymer, Phonegap, and a local pouchDB which syncs to a couchDB on cloudant.com

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`
    
#### Install

    $ npm install -g phonegap
    $ npm install -g bower
    $ bower install

#### Debugging the app

    $ cd app
    $ phonegap serve
    
#### Building the app

    $ cd app
    $ phonegap build android    #apk file goes to app/platforms/android
    $ phonegap build ios        #on an ios environment only
    
	  
#### Remaining Work

- clear completed: Add index on deleted (or completed), and attempt to query by it
- message to user on create/update of a task
- strikethrough on task on completed
- order by created date
- add priority - and order by this as primary, and created as secondary then
- logo not loading in app
- All of description not showing on view task

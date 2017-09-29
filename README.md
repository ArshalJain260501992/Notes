# Notes

Notes is platform to create, update, delete and check your to-do list and have it on cloud to be able to check it anywhere in this world.

## Demo 
check it out at https://notesui.cfapps.io
### Tech

GoLearn uses a number of open source projects to work properly:

* [Angular 4] - HTML enhanced for web apps!
* [Visual Studio Code Editor] - awesome web-based text editor
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [NPM] - the streaming build system
* [jQuery] - duh
* [Java] - best applicaton language out there
* [Spring Boot] - really great assistive application framework
* [Mongo DB Community Server] - an unstructured No-SQL DB

### Installation
There are two microservices in this system -
* Frontend (Angular 4)
* Backend (Java + Spring Boot + Mongo)

#### Frontend Usage
* Notes requires [Node.js](https://nodejs.org/) v6.11.x to run.
* Install Angular CLI 1.4.3
* Go to Frontend project directory and run -
```sh
$ npm install
```
* Install the dependencies and devDependencies and start the server -
```sh
$ ng serve --port 4200
```

### Backend Usage
* Install Mongo Db Server and start it
* Run following commands on the cmd-let where you started mongo server
```sh
$ use dbs notes
$ db.createCollection("notes")
```
* Go to Notes Directory(Backend), and clone it
* Run it as Spring Boot application

* Now the application is available to be used on browser at <http://localhost:4200>

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [AngularJS]: <http://angularjs.org>

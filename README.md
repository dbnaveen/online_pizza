# Online Pizza Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Application URL

https://dbnaveen.github.io/online_pizza/

## Application Info

* This application is build using Angular `v12.0.1`

* `Angular Material` as the UI component library

* CSS are written `SCSS pre-processor`

## List of all commands used in the application

* ng new online_pizza --style=scss
    * Allow strict “Y”
    * Create angular routing “Y”
* Generate fav icon and add the new fav icon
    * Need to define the new favicon in the angular.json file
    * ~~Fav icon with folder was not working~~
* npm install --save bootstrap jquery popper.js
* ng g component components/app-header
* npm install --save @angular/material @angular/cdk @angular/animations
* npm install --save hammerjs
* ng g component components/app-deals
* ng g component components/app-pizzas

If you get a error with angular-material: run below commands

* sudo npm install -g @angular/cli@latest
* sudo ng update @angular/cli @angular-devkit/build-angular 
* sudo ng update @angular/core @angular/cdk @angular/material
* Delete node_modules: sudo npm install —force


* To get bootstrap grid, add bootstrap css and js file to angular.json
* ng g component components/app-footer (if error)
* ng g component components/app-footer —module app

Implement Interceptors:
* ng generate service services/loader
* ng g component components/shared/app-loader --module app
* ng generate service services/data (for the API)
* "noImplicitAny": false, (in tsconfig.json if u get a parameter 'xxx' implicitly has an 'any' type)

* ng g component components/app-footer —module app

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment to Github Page

* ng build --prod --output-path docs --base-href /online_pizza/
* It creates a docs folder
* Goto docs folder, copy index.html and paste it there and rename it as 404.html
* Push the docs folder to Github
* Now, go to your repository in Github
* Click on settings, scroll to bottom, under "GitHub Pages" click on "Check it out here!"
* The new link to our application will be created

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.



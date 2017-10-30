# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Steps to include jquery and jqueryui in Angular 4:

1. Install following npm modules

```
npm install jquery --save
npm install --save-dev @types/jquery
npm install jquery-ui --save
npm install --save @types/jqueryui
npm install jquery-ui-dist --save
```

2. Edit .angular-cli.json scripts and styles sections in the following manner:
```
"styles": [
    "styles.css",
    "../node_modules/jquery-ui-dist/jquery-ui.min.css"
],
"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/jquery-ui-dist/jquery-ui.min.js"
],
```      
 
3. Declare following variables before @Component decorator in every component you wish to use jquery (refer to app.component.ts file for example of this):
```
declare var jquery:any;
declare var $ :any;
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


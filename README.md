# DocFinderPOC
## Overview
This is a proof of concept project that demonstrates using Angular and external services to locate a provider by zip code. It was developed using common and open source tools, primarily:
* [Angular/CLI](https://cli.angular.io/)
* Angular/CLI scaffolding
* Atom
* Intrinsic dev tools of your favorite web browser

## Setup
This project use Angular Material components. Information about material can be found here: https://material.angular.io/

Once this project has been downloaded from Github, from an angular-cli command window:

Restore node_modules:

npm i

Add material bits (from:https://material.angular.io/guide/getting-started )

npm install --save @angular/material @angular/cdk

npm install --save @angular/animations

This POC utilizes two services exernal to UHG. The first is a service that translates a zip code to location data (latitude/longitude) that is then used in a provider lookup service.

These services require an API key as a part of the REST call. I have removed my keys from the source, but getting keys for development purposes is easy. Visit each site below to register for an API key.

[Better Doctor (provider API)](https://betterdoctor.com/)

[Zip code API](https://www.zipcodeapi.com/rest)


Once API keys have been obtained, enter the values in app.modules.ts, in the providers section (near line: 35):

```{ provide: 'DOCFINDER_USER_KEY', useValue: '################################'},```

```{ provide: 'ZIP_OPS_API_KEY', useValue: '################################################################' },```


## Content generated by scaffolding
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### Note about this

`ng serve -h ###.###.###.###` where ###.###.###.### is an ip address will start the server with an accessible IP address. If you have an accessible network (at home for example) the dev server can be accessed by other computers or devices for testing.

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

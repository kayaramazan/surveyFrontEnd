# SurveyFrontEnd

Survey project is a project where people can poll about each other and only admin user can see the all result.
Each question's answer has a own score and come through by default 1 to 5 but you can change these scores when you adding question from admin panel  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Table Content 

- Roles
- Mysql
- Quick Start
- Creators
- API
## Roles
The project has two type role.These are `user` and `admin`
- [x] User :
  - Login account
  - List assigned survey
  - Filling the questions in survey
  - List completed surveys
- [x] Admin : 
  - Creating user
  - Creating survey
  - Adding questions and answers to the survey
  - Assigning survey to other user
  - Listing all results
  - Listing scores filtered by user
 ## Mysql
 
This repo is using Mysql. I used NodeJs and it connects to mysql server.

## Quick Start
`npm install` <br>

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## API
This repo is using NodeJs Api Server [click](https://github.com/kayaramazan/surveyBackend) to access backend project
## Creators

**Ramazan Kaya**

- <https://github.com/kayaramazan>
 
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

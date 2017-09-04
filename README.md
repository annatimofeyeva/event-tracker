# EventTracker

Event tracker - web application which allows users to stay informed about current Hermitage Museum exhibitions. Now it's far easier to answer the question - What's on the Hermitage! Users can view a specific exhibition's details. Users can view the About us page Visit us to learn more about the museum's history ans plan their visits. Admins can add new rxhibition and edit a exhibition's properties, including title, location, decription and date. Admins can also delete exhibitions.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Gulp]
* [Angular.js]
* [Bower]

## Installation

* `git clone <repository-url>` this repository
* `npm install`
* `bower init`
* `ng serve`
* Navigate to `localhost:4200` in your browser

## Code Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User is on home page and sees list of exhibitions.|User clicks on a specific exhibition.|User sees a new page with just that exhibition's specific details.|
|User is on home page again.|User clicks on the "About" tab up top nav bar.|User navigates to the About page showing more details about museum's exhibition.|
|Admin is on home page with list of exhibitions listed.|Admin clicks on the "Admin" tab in top nav bar.|Admin can sees same list but can now add new exhibitions.|
|Admin is on the same home page with admin controls enabled.|Admin clicks add new exhibition button.|Admin can now add exhibition details on the form listed.|
|Admin is on add new exhibition form.|Admin fills out exhibition details and clicks "Add".|Admin sees list of exhibitions again with new exhibition added.|
|Admin sees list of exhibitions.|Admin clicks on a member for details.|Admin sees the exhibition's details along with additional options "Edit" or "Delete".|
|Admin sees "Edit" button next exhibition's details.|Admin clicks "Edit".|Admin sees an edit form open.|
|Admin sees edit form with placeholder info already populated for current data.|Admin makes changes to a exhibitions's details and clicks "Edit".|Admin sees exhibition's info page listed with the updates.|
|Admin is on detail page with admin unlocked still, and sees "Delete" button.|Admin clicks "Delete" button, sees an alert prompt to confirm choice, selects OK.|Admin goes back to list of exhibitions with that member no longer on it.|

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
Before running the tests make sure you are serving the app via `ng serve`.

## Support and contact details

_Please contact Anna Timofeyeva at anjatimofeyeva@gmail.com for any questions, feedback, or concerns._


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

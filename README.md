# Tpclinica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##PASOS
creacion de proyecto 
ng new tpclinica
creacion de enviroment 
ng g enviroments
 addiccion configuracion del archivo gitignore de enviroment folder
 creacion de proyecto en  firebase
 registro app 
 creo base de datos en modo produccion y cambio regla a true
 creo storage y cambio regla a true
 en proyecto en la terminal ejecuto comando
 npm install firebase
 ng add @angular/fire 
 seleccion de angular autenticacion cloud y firestore
 en proyecto paso objecto de configuracion de la app. config.ts  en 
 provideFirebaseApp(() => initializeApp({...}))  paso los datos que se configuraron ahi a lkos archivos environment
 




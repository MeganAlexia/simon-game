# SimonGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## About the project
The game begins with a sequence of length 1. If you win, you win 10 points and get on the level above. If you lose, your score and your level get back to 0.

### Technical stack

- Angular (v6.1.0)
- Angular Material (v6.4.7)
- Karma (v1.7.1)
- Jasmine (v2.99.1)
- Typescript (v2.7.2)

The project has been generated with Angular Cli for easy and quick development. It allows to automatically get configurations : Webpack, Karma, Jasmine, ... 

The choice has been made to use Typescript as a superset of ES6: allowing types make the code way more clear and understandable (see tsconfig for the support). Moreover, Angular works by default with Typescript.

Finally, Angular Material has been used in order to get quick design of the application (the application is not completely responsive).

### Architecture
The App folder contains the following : 

- `app.module.ts` : it's the entry module of the application. It bootstraps the `AppComponent` as an entry component.
It also imports all the components used in the application and their necessary module to work.
- `helpers`: it's a folder containing useful functions that can be imported in any files.
- `layout`: it contains all the components of the application
- `game-handler` : contains the service that is handling the Game. It's an injectable service that allows to start, handle changes, and clean the game when needed. 
 
In the asset folder can be find Typescript models for typing and a mock for the buttons. The application can work with as much buttons as you want (as long as they have different IDs). 
 
In this application, there is no feature module lazy-loaded as the application is pretty basic. On the same point, there is no need of `CoreModule` (provides services global to the application) or `SharedModule` (handle UI part of the application) (cf Angular conventions).

### Still in TODO
The application is not totally finished.

- To see the Simon Sequence (the animation has not be done yet), you need to open the navigator console. The sequence will be logged there. The animation needs to be done.
- Angular Cli generates automatically generates unit tests. Most of them are skipped as they are not working anymore and the tests need to be finished (TDD has not been done on this project). 

## Development
### Developement server
Run `yarn install` to install the dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

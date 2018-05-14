# Angular Fun

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `npm run mock:porxy` for a dev server. Navigate to `http://localhost:4204/`. The app will automatically reload if you change any of the source files.

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


## Demo

1. [https://stackblitz.com/github/wkylin/ng-funs](https://stackblitz.com/github/wkylin/ng-funs)

2. [https://github.com/wkylin/ng-funs](https://github.com/wkylin/ng-funs)

## Update angular6.0

1. npm uninstall -g @angular/cli
2. npm install -g @angular/cli
3. npm install  @angular/cli
4. ng update  @angular/cli
5. ng update @angular/core
6. ng update @angular/material
7. ng add rxjs-compat || npm install rxjs-compat --save

## Cygwin 
1. 安装Cygwin https://cygwin.com/
2. C:\cygwin64\home\UserName
3. openssl genrsa -out key.pem 1024
4. openssl req -new -key key.pem -out cert.csr
5. openssl x509 -req -in cert.csr -signkey key.pem -out cert.pem
6. http-server -S  -C cert.pem -K key.pem

## Ngrok
1. "build": "ng build --prod",
2. "http:server": "cd dist && http-server -p 9088",
3. "ngr": "ngrok http 9088",

## Run 
1. mock:proxy
2. build && express:data && cd dist/browser && http-server -p 8088 && ngrok http 8088

## angular-json-server
1. https://my-json-server.typicode.com/wkylin/angular-json-server


## angular-cli-ghpages
1. 调整angular.json "outputPath": "dist/browser" 为 "outputPath": "dist"
2. ServiceWorkerModule.register('/ng-funs/ngsw-worker.js', {enabled: environment.production})
3. build:ngh
4. ngh
5. https://wkylin.github.io/ng-funs/

## Angular Doc
https://angulardoc.org/repos/detail/github/133325024/angular2/%252F/summary

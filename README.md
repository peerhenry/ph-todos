# ph-todos
dummy nodejs app to learn connecting to a mongodb, as well as ajax with react & redux.

## Setup
After downloading the source code, execute following commands:
`npm install` - Installs all required node packages.
`npm run build` - Compiles the react code with webpack.
`start.bat` - Enables debug logging and starts the server with nodemon.

The batch file simply sets an environment variable for logging in the command shell for Windows before starting the server with nodemon. Alternatively, you can start the server by executing `npm start`. If you want to start the server without automatic restart, run: `node ./bin/www`.

## Development
Nodemon will automatically restart the server when it detects changes. If you also want the react code to autocompile with webpack when making changes to source files, open another console and run:
`npm run build.watch`
After webpack has recompiled, nodemon will also restart the server.

## Debug Logging
If you don't use start.bat, you need to set an environment variable to be able to see the debug log.
On Windows the environment variable is set using the set command.

`set DEBUG=*,-not_this`

Note that PowerShell uses different syntax to set environment variables.

`$env:DEBUG = "*,-not_this"`

Then, run the program to be debugged as usual.

https://www.npmjs.com/package/debug

## Unit Tests
Run unit tests with:

`npm run test.start`

The results will be shown in Chrome.

### Explanation
The `npm run test.start` script does three things:

1. `startchrome.bat http://localhost:8777/index.html`
2. `webpack --progress --colors --config webpack-test.config.js --watch`
3. `autoreload-server -w \"**/**.{html,css,js}\" ./test-report 8777`

The last two commands are run concurrently - using the package 'concurrently'.
The webpack-test.config.js is configured to use a plugin that runs mocha as soon as webpack is done transpiling. Mocha is configured to use the mochawesome reporter - a nice looking test report - which gets hosted by autoreload-server. As the name implies, the browser is reloaded when a new report is generated.

With the browser already open, you can execute only steps 2 and 3 by running: 

`npm test`

## Hot reloading

Run a dev server with `npm run dev`. The server actually makes use of the server bundle, so all XHR's work! It also works with hot reloading provided that either:
- the webpack entry contains:
```javascript
if (module.hot) {
  module.hot.accept();
}
```
- use `react-transform` along with `react-transform-hmr`
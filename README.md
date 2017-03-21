# ph-todos
dummy nodejs app to learn connecting to a mongodb, as well as ajax with react & redux.

## Requirements
Make sure you have globally installed webpack and nodemon. You can view the packages you have installed globally with the command:

`npm list -g --depth 0`

If webpack or nodemon are not on the list you can install them with the command:

`npm i -g webpack nodemon`

## Setup
After downloading the source code, execute following commands:
`npm install` - Installs all required node packages.
`webpack` - Compiles the react code.
`start.bat` - Enables debug logging and starts the server with nodemon.

The batch file simply sets an environment variable for logging in the command shell for Windows before starting the server with nodemon. Alternatively, you can start the server by executing:

`npm start` or `nodemon ./bin/www` or if prefer no automatic restart: `node ./bin/www`

## Development
Nodemon will automatically restart the server when it detects changes. If you also want the react code to autocompile with webpack, open another console and run:
`webpack --watch`
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
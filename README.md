# ph-todos
dummy nodejs app to learn connecting to a mongodb, as well as ajax with react & redux.

## requirements
Make sure you have globally installed webpack and nodemon. You can view the packages you have installed globally with the command:

`npm list -g --depth 0`

If webpack or nodemon are not on the list you can install them with the command:

`npm i -g webpack nodemon`

## setup
After downloading the source code, execute following commands:
`npm install` - Installs all required node packages.
`webpack` - Compiles the react code.
`start.bat` - Enables debug logging and starts the server with nodemon.

The batch file simply sets an environment variable for logging in the command shell for Windows before starting the server with nodemon. Alternatively, you can start the server by executing:

`npm start` or `nodemon ./bin/www` or if prefer no automatic restart: `node ./bin/www`

## development
Nodemon will automatically restart the server when it detects changes. If you also want the react code to autocompile with webpack, open another console and run:
`webpack --watch`
After webpack has recompiled, nodemon will also restart the server.

## debug logging
If you don't use start.bat, you need to set an environment variable to be able to see the debug log.
On Windows the environment variable is set using the set command.

`set DEBUG=*,-not_this`

Note that PowerShell uses different syntax to set environment variables.

`$env:DEBUG = "*,-not_this"`

Then, run the program to be debugged as usual.

https://www.npmjs.com/package/debug
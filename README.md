# ph-todos
dummy nodejs app to learn connecting to a mongodb

## run
Start the server by running start.bat

## debug logging
If you don't use start.bat, you need to set an environment variable to be able to see the debug log.
On Windows the environment variable is set using the set command.

`set DEBUG=*,-not_this`

Note that PowerShell uses different syntax to set environment variables.

`$env:DEBUG = "*,-not_this"`

Then, run the program to be debugged as usual.

https://www.npmjs.com/package/debug
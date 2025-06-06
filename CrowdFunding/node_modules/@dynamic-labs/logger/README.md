# logger

Generic logger that wraps console.log with support of log levels and formatting messages.

Features:

1. Create a new named logger `new Logger(name, LogLevel.INFO)`
2. Formats log messages: `[name] [level]: message`
3. Supports additional arguments just like console log
4. Change the loglevel with `logger.setLogLevel(LogLevel)`

## Building

Run `nx build logger` to build the library.

## Running unit tests

Run `nx test logger` to execute the unit tests via [Jest](https://jestjs.io).

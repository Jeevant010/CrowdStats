'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.LogLevel = void 0;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["MUTE"] = 99] = "MUTE";
})(exports.LogLevel || (exports.LogLevel = {}));

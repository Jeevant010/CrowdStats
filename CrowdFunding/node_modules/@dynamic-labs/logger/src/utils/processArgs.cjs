'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Split args into object and non-object args
 * @param message
 * @returns
 */
const processArgs = (message) => {
    // Apply object args to body
    const objectArgs = message.args.filter((arg) => typeof arg === 'object');
    // Capture remaining non-object args
    const remainingArgs = message.args
        .filter((arg) => typeof arg !== 'object' || arg instanceof Error)
        .map((arg) => { var _a; return (_a = arg === null || arg === void 0 ? void 0 : arg.toString) === null || _a === void 0 ? void 0 : _a.call(arg); });
    return { objectArgs, remainingArgs };
};

exports.processArgs = processArgs;

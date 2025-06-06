'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('../logger.cjs');

const createMessageHandler = (parentOrigin) => (eventName, handler) => {
    window.addEventListener('message', (event) => {
        if (event.origin !== parentOrigin) {
            return;
        }
        try {
            if (!Object.prototype.hasOwnProperty.call(event.data, 'eventName') ||
                !Object.prototype.hasOwnProperty.call(event.data, 'args') ||
                !Array.isArray(event.data.args)) {
                return;
            }
            const { eventName: incomingEventName, args } = event.data;
            if (incomingEventName === eventName) {
                handler(...args);
            }
        }
        catch (error) {
            logger.logger.error('Failed to parse message', error);
        }
    });
};

exports.createMessageHandler = createMessageHandler;

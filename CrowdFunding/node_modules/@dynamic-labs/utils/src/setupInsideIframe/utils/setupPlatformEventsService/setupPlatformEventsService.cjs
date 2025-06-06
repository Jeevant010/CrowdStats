'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EventEmitter = require('eventemitter3');
var createMessageHandler = require('../createMessageHandler/createMessageHandler.cjs');
var PlatformEventsService = require('../../../services/PlatformEventsService/PlatformEventsService.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

const setupPlatformEventsService = (initialParentURL) => {
    const emitter = new EventEmitter__default["default"]();
    const messageHandler = createMessageHandler.createMessageHandler(initialParentURL.origin);
    PlatformEventsService.PlatformEventsService.implementation = emitter;
    messageHandler('APP_FOCUS', () => {
        emitter.emit('appFocused');
    });
};

exports.setupPlatformEventsService = setupPlatformEventsService;

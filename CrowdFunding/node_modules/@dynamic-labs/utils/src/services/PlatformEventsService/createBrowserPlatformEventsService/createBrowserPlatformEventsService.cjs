'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EventEmitter = require('eventemitter3');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

const createBrowserPlatformEventsService = (window) => {
    const emitter = new EventEmitter__default["default"]();
    /**
     * This map ensure the when a new value is added to
     * IPlatformEvents it will be required to implement here too
     */
    const mapPlatformEventsToRequestChannel = {
        appFocused: () => {
            window.addEventListener('focus', () => {
                emitter.emit('appFocused');
            });
        },
    };
    // Setup all events
    Object.values(mapPlatformEventsToRequestChannel).forEach((handler) => handler());
    return emitter;
};

exports.createBrowserPlatformEventsService = createBrowserPlatformEventsService;

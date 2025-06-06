'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var createBrowserPlatformEventsService = require('./createBrowserPlatformEventsService/createBrowserPlatformEventsService.cjs');

var _a, _PlatformEventsService_implementation;
class PlatformEventsService {
    static get implementation() {
        if (!_tslib.__classPrivateFieldGet(_a, _a, "f", _PlatformEventsService_implementation)) {
            _tslib.__classPrivateFieldSet(_a, _a, createBrowserPlatformEventsService.createBrowserPlatformEventsService(window), "f", _PlatformEventsService_implementation);
        }
        return _tslib.__classPrivateFieldGet(_a, _a, "f", _PlatformEventsService_implementation);
    }
    static set implementation(implementation) {
        _tslib.__classPrivateFieldSet(_a, _a, implementation, "f", _PlatformEventsService_implementation);
    }
    static get on() {
        return _a.implementation.on.bind(_a.implementation);
    }
    static get off() {
        return _a.implementation.off.bind(_a.implementation);
    }
    static get once() {
        return _a.implementation.once.bind(_a.implementation);
    }
}
_a = PlatformEventsService;
_PlatformEventsService_implementation = { value: void 0 };

exports.PlatformEventsService = PlatformEventsService;

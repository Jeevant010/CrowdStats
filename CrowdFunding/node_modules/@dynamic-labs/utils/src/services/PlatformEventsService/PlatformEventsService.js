'use client'
import { __classPrivateFieldGet, __classPrivateFieldSet } from '../../../_virtual/_tslib.js';
import { createBrowserPlatformEventsService } from './createBrowserPlatformEventsService/createBrowserPlatformEventsService.js';

var _a, _PlatformEventsService_implementation;
class PlatformEventsService {
    static get implementation() {
        if (!__classPrivateFieldGet(_a, _a, "f", _PlatformEventsService_implementation)) {
            __classPrivateFieldSet(_a, _a, createBrowserPlatformEventsService(window), "f", _PlatformEventsService_implementation);
        }
        return __classPrivateFieldGet(_a, _a, "f", _PlatformEventsService_implementation);
    }
    static set implementation(implementation) {
        __classPrivateFieldSet(_a, _a, implementation, "f", _PlatformEventsService_implementation);
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

export { PlatformEventsService };

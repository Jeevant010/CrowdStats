'use client'
import { __classPrivateFieldGet, __classPrivateFieldSet } from '../../../_virtual/_tslib.js';

var _a, _FetchService_implementation;
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */
class FetchService {
    static get implementation() {
        if (!__classPrivateFieldGet(_a, _a, "f", _FetchService_implementation)) {
            return { fetch: window.fetch.bind(window) };
        }
        return __classPrivateFieldGet(_a, _a, "f", _FetchService_implementation);
    }
    static set implementation(implementation) {
        __classPrivateFieldSet(_a, _a, implementation, "f", _FetchService_implementation);
    }
    static get fetch() {
        return _a.implementation.fetch;
    }
}
_a = FetchService;
_FetchService_implementation = { value: void 0 };

export { FetchService };

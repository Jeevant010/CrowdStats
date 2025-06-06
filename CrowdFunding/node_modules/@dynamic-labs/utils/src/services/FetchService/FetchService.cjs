'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');

var _a, _FetchService_implementation;
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */
class FetchService {
    static get implementation() {
        if (!_tslib.__classPrivateFieldGet(_a, _a, "f", _FetchService_implementation)) {
            return { fetch: window.fetch.bind(window) };
        }
        return _tslib.__classPrivateFieldGet(_a, _a, "f", _FetchService_implementation);
    }
    static set implementation(implementation) {
        _tslib.__classPrivateFieldSet(_a, _a, implementation, "f", _FetchService_implementation);
    }
    static get fetch() {
        return _a.implementation.fetch;
    }
}
_a = FetchService;
_FetchService_implementation = { value: void 0 };

exports.FetchService = FetchService;

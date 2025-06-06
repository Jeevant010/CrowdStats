'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var types = require('@dynamic-labs/types');
var createWindowOauth2Service = require('./createWindowOauth2Service/createWindowOauth2Service.cjs');

var _a, _Oauth2Service_implementation;
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */
class Oauth2Service {
    static get implementation() {
        if (!_tslib.__classPrivateFieldGet(_a, _a, "f", _Oauth2Service_implementation)) {
            return createWindowOauth2Service.createWindowOauth2Service();
        }
        return _tslib.__classPrivateFieldGet(_a, _a, "f", _Oauth2Service_implementation);
    }
    static set implementation(implementation) {
        _tslib.__classPrivateFieldSet(_a, _a, implementation, "f", _Oauth2Service_implementation);
    }
    static get getOauthCode() {
        return _a.implementation.getOauthCode;
    }
}
_a = Oauth2Service;
_Oauth2Service_implementation = { value: void 0 };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Oauth2Service.isGetOauthCodeError = (error) => typeof error === 'object' &&
    'code' in error &&
    Object.values(types.SocialOAuthErrorCode).includes(error.code) &&
    'message' in error &&
    typeof error.message === 'string';

exports.Oauth2Service = Oauth2Service;

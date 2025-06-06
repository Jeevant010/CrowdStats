'use client'
import { __classPrivateFieldGet, __classPrivateFieldSet } from '../../../_virtual/_tslib.js';
import { SocialOAuthErrorCode } from '@dynamic-labs/types';
import { createWindowOauth2Service } from './createWindowOauth2Service/createWindowOauth2Service.js';

var _a, _Oauth2Service_implementation;
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */
class Oauth2Service {
    static get implementation() {
        if (!__classPrivateFieldGet(_a, _a, "f", _Oauth2Service_implementation)) {
            return createWindowOauth2Service();
        }
        return __classPrivateFieldGet(_a, _a, "f", _Oauth2Service_implementation);
    }
    static set implementation(implementation) {
        __classPrivateFieldSet(_a, _a, implementation, "f", _Oauth2Service_implementation);
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
    Object.values(SocialOAuthErrorCode).includes(error.code) &&
    'message' in error &&
    typeof error.message === 'string';

export { Oauth2Service };

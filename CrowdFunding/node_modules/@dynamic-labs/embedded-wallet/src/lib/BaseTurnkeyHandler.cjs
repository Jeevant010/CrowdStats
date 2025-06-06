'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class BaseTurnkeyHandler {
    get client() {
        return this.__turnkeyClient;
    }
    get publicKey() {
        return this.__publicKey;
    }
    clear() {
        var _a;
        (_a = this.__iframeStamper) === null || _a === void 0 ? void 0 : _a.clear();
        this.__iframeStamper = undefined;
        this.__publicKey = undefined;
        this.__turnkeyClient = undefined;
    }
}

exports.BaseTurnkeyHandler = BaseTurnkeyHandler;

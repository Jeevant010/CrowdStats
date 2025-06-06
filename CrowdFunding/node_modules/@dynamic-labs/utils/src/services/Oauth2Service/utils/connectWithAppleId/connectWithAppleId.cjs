'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var loadAppleId = require('../loadAppleId/loadAppleId.cjs');

const connectWithAppleId = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ clientId, oauthLoginUrl, state, }) {
    yield loadAppleId.loadAppleId();
    // Because the AppleID is loaded from a script tag, there is not type for it
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AppleID.auth.init({
        clientId,
        redirectURI: oauthLoginUrl.searchParams.get('redirect_uri'),
        scope: 'name email',
        state,
        usePopup: false,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AppleID.auth.signIn();
});

exports.connectWithAppleId = connectWithAppleId;

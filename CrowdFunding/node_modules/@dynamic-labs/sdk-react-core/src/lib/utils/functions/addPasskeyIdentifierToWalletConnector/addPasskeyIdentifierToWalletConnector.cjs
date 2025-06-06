'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const addPasskeyIdentifierToWalletConnector = (walletConnector, user) => {
    var _a;
    const passkeyIdentifier = (user === null || user === void 0 ? void 0 : user.phoneNumber) ||
        ((_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((vc) => vc.oauthDisplayName)) === null || _a === void 0 ? void 0 : _a.oauthDisplayName) ||
        '';
    walletConnector.setPasskeyIdentifier(passkeyIdentifier);
};

exports.addPasskeyIdentifierToWalletConnector = addPasskeyIdentifierToWalletConnector;

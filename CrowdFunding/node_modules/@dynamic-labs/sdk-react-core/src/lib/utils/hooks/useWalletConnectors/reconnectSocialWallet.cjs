'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');

/**
 * This function will use a referenced account to kick off the social wallet
 * authentication. This is useful in the multiwallet scenario where the user
 * wants to set their disconnected social wallet as their primary wallet, in
 * which case the wallet needs to be reconnected
 */
const reconnectSocialWallet = (user, connector, walletAddress, walletChain) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (!walletConnectorCore.isSocialWalletConnector(connector)) {
        return;
    }
    const socialAccountDataForWallet = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((account) => account.format === sdkApiCore.JwtVerifiedCredentialFormatEnum.Oauth &&
        account.address &&
        walletConnectorCore.isSameAddress(account.address, walletAddress, walletChain));
    if (!socialAccountDataForWallet ||
        !socialAccountDataForWallet.oauthProvider) {
        return;
    }
    yield connector.connect(socialAccountDataForWallet.oauthProvider);
});

exports.reconnectSocialWallet = reconnectSocialWallet;

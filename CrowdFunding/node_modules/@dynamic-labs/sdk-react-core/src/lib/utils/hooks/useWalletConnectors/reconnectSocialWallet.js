'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { isSocialWalletConnector, isSameAddress } from '@dynamic-labs/wallet-connector-core';
import { JwtVerifiedCredentialFormatEnum } from '@dynamic-labs/sdk-api-core';

/**
 * This function will use a referenced account to kick off the social wallet
 * authentication. This is useful in the multiwallet scenario where the user
 * wants to set their disconnected social wallet as their primary wallet, in
 * which case the wallet needs to be reconnected
 */
const reconnectSocialWallet = (user, connector, walletAddress, walletChain) => __awaiter(void 0, void 0, void 0, function* () {
    if (!isSocialWalletConnector(connector)) {
        return;
    }
    const socialAccountDataForWallet = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((account) => account.format === JwtVerifiedCredentialFormatEnum.Oauth &&
        account.address &&
        isSameAddress(account.address, walletAddress, walletChain));
    if (!socialAccountDataForWallet ||
        !socialAccountDataForWallet.oauthProvider) {
        return;
    }
    yield connector.connect(socialAccountDataForWallet.oauthProvider);
});

export { reconnectSocialWallet };

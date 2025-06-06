'use client'
const isPasskeyWalletConnector = (walletConnector) => Boolean(walletConnector.getWebAuthnAttestation);

export { isPasskeyWalletConnector };

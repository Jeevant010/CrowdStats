'use client'
const isEmailOTPWalletConnector = (walletConnector) => Boolean(walletConnector.verifyOneTimePassword);

export { isEmailOTPWalletConnector };

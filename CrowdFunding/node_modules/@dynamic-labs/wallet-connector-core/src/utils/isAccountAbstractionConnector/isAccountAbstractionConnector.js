'use client'
const isAccountAbstractionConnector = (walletConnector) => walletConnector !== undefined &&
    walletConnector !== null &&
    typeof walletConnector === 'object' &&
    'canSponsorTransactionGas' in walletConnector;

export { isAccountAbstractionConnector };

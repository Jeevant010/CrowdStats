'use client'
const isHardwareWalletConnector = (connector) => 'canConnectWithHardwareWallet' in connector;

export { isHardwareWalletConnector };

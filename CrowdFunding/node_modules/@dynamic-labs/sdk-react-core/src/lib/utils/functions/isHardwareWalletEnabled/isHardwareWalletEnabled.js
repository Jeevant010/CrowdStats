'use client'
import { isHardwareWalletConnector } from '@dynamic-labs/wallet-connector-core';

const isHardwareWalletEnabled = (walletConnector) => walletConnector !== undefined &&
    walletConnector !== null &&
    isHardwareWalletConnector(walletConnector) &&
    walletConnector.isHardwareWalletEnabled;

export { isHardwareWalletEnabled };

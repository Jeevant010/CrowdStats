'use client'
import { HardwareWalletEnum } from '@dynamic-labs/sdk-api-core';

const convertLegacyPhantomLedgerConnector = (account) => (Object.assign(Object.assign({}, account), { walletName: 'phantom', walletProperties: {
        hardwareWallet: HardwareWalletEnum.Ledger,
    } }));

export { convertLegacyPhantomLedgerConnector };

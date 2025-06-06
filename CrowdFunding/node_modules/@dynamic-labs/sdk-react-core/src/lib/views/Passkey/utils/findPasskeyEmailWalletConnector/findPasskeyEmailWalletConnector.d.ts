import { IEmailWalletConnector, IPasskeyWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { ChainEnum } from '@dynamic-labs/sdk-api-core';
import { WalletOption } from '../../../../shared';
export declare const findPasskeyEmailWalletConnector: (wallets: WalletOption[], chain: ChainEnum) => (IPasskeyWalletConnector & IEmailWalletConnector) | undefined;

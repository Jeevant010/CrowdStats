import { IEmailOTPWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { ProviderHandler } from '../types';
export declare const createMagicHandler: (connector: IEmailOTPWalletConnector | undefined, handleInstalledExtensionClick: (connector: IEmailOTPWalletConnector) => void) => ProviderHandler<string>;

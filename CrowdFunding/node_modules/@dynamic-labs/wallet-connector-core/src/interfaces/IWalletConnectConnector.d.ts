import { WalletConnectorBase } from '..';
export interface IWalletConnectConnector extends WalletConnectorBase {
    getConnectionUri(): string | undefined;
    getSupportedNetworks(): Promise<string[]>;
}

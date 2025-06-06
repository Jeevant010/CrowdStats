import { WalletConnectorBase } from '../..';
export interface IHardwareWalletConnector extends WalletConnectorBase {
    canConnectWithHardwareWallet(): boolean;
    isHardwareWalletEnabled: boolean;
}

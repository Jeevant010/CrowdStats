import { WalletConnectorBase } from '../WalletConnectorBase';
export interface ISMSWalletConnector extends WalletConnectorBase {
    get phone(): string | undefined | null;
    setPhone(phone: ISMSWalletConnector['phone']): void;
}

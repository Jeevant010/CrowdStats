import { TransactionReceipt, IUITransaction } from '@dynamic-labs/types';
import { WalletConnectorBase } from '../WalletConnectorBase';
export interface ISendBalanceWalletConnector extends WalletConnectorBase {
    createUiTransaction(from: string): Promise<IUITransaction>;
    confirmTransactionStatus?(txHash: string): Promise<TransactionReceipt>;
}

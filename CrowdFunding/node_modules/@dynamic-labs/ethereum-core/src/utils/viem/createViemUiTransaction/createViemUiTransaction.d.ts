import { Chain, PublicClient, Transport, WalletClient } from 'viem';
import { ViemUiTransaction } from '../ViemUiTransaction';
type CreateViemUiTransactionProps = {
    publicClient: PublicClient<Transport, Chain>;
    walletClient: WalletClient<Transport, Chain>;
    from: string;
};
export declare const createViemUiTransaction: ({ from, publicClient, walletClient, }: CreateViemUiTransactionProps) => Promise<ViemUiTransaction>;
export {};

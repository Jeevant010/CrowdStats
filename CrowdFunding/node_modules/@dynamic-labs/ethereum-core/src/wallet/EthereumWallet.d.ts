import { Account, Chain, HttpTransportConfig, PublicClient, Transport, WalletClient, SendCallsParameters, SendCallsReturnType } from 'viem';
import { Wallet, WalletProps } from '@dynamic-labs/wallet-connector-core';
import { EthereumWalletConnector } from '../connector';
export declare class EthereumWallet extends Wallet<EthereumWalletConnector> {
    constructor(props: WalletProps<EthereumWalletConnector>);
    /**
     * Sends the native balance of the wallet to the given address.
     * @param amount - The amount of balance to send (in ETH).
     * @param toAddress - The address to send the balance to.
     * @param token - The token to send (optional) — for example, an ERC20 token.
     *   @param token.address - The address of the token contract.
     *   @param token.decimals - The decimals of the token (defaults to 18).
     * @returns The transaction hash of the sent transaction.
     */
    sendBalance({ amount, toAddress, token, }: {
        amount: string;
        toAddress: string;
        token?: {
            address: string;
            decimals?: number;
        };
    }): Promise<`0x${string}`>;
    /**
     * Retrieves the public client.
     * @returns A promise that resolves to the public client,
     * or throws if the client cannot be retrieved.
     */
    getPublicClient(): Promise<PublicClient<Transport, Chain>>;
    /**
     * Retrieves the wallet client.
     * @param chainId - (optional) Chain id to be used by the wallet client.
     * @returns A promise that resolves to the wallet client,
     * or throws if the client cannot be retrieved.
     */
    getWalletClient(chainId?: string): Promise<WalletClient<Transport, Chain, Account>>;
    getTransportConfig(): HttpTransportConfig | undefined;
    isSignAuthorizationSupported(): boolean;
    isPaymasterServiceSupported(chainId?: number): Promise<boolean>;
    isAtomicSupported(chainId?: number): Promise<boolean>;
    sendCalls(callParams: Omit<SendCallsParameters, 'account'>, options?: {
        paymasterURL?: string;
    }): Promise<SendCallsReturnType>;
}

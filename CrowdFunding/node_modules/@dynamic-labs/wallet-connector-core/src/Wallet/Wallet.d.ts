import type { BaseWalletProps } from '@dynamic-labs/types';
import { BaseWallet } from '@dynamic-labs/types';
import { InternalWalletConnector, NameServiceData, WalletConnector } from '../WalletConnectorBase';
export type WalletProps<T extends InternalWalletConnector = InternalWalletConnector> = BaseWalletProps & {
    connector: T;
};
export declare abstract class Wallet<T extends InternalWalletConnector = InternalWalletConnector> extends BaseWallet {
    protected _connector: T;
    constructor({ connector, ...props }: WalletProps<T>);
    /**
     * Gets the wallet connector.
     */
    get connector(): WalletConnector;
    abstract sendBalance({ amount, toAddress, token, }: {
        amount: string;
        toAddress: string;
        token?: {
            address: string;
            decimals?: number;
        };
    }): Promise<string | undefined>;
    /**
     * Retrieves the balance of the wallet.
     * @returns A promise that resolves to the balance of the wallet as a string,
     * or undefined if the balance cannot be retrieved.
     */
    getBalance(): Promise<string | undefined>;
    /**
     * Retrieves the name service data associated with the wallet.
     * @returns A promise that resolves to the name service data of the wallet,
     * or undefined if the data cannot be retrieved.
     */
    getNameService(): Promise<NameServiceData | undefined>;
    /**
     * Retrieves the network that the wallet is connected to.
     * @returns A promise that resolves to the network value as a string or number,
     * or undefined if the network cannot be retrieved.
     */
    getNetwork(): Promise<string | number | undefined>;
    /**
     * If the wallet is connected.
     * @returns A promise that resolves to true the wallet is connected or false if it's not connected.
     */
    isConnected(): Promise<boolean>;
    /**
     * Proves ownership of the wallet by signing a message.
     * @param messageToSign - The message to sign.
     * @returns A promise that resolves to the signature of the message as a string,
     *  or undefined if the message cannot be signed.
     */
    proveOwnership(messageToSign: string): Promise<string | undefined>;
    /**
     * Signs a message using the wallet.
     * @param messageToSign - The message to sign.
     * @returns A promise that resolves to the signature of the message as a string,
     * or undefined if the message cannot be signed.
     */
    signMessage(messageToSign: string): Promise<string | undefined>;
    /**
     * Switches the network that the wallet is connected to.
     * @param networkChainId - The chain id of the network to switch to.
     * @returns A promise that resolves when the network is switched.
     */
    switchNetwork(networkChainId: number | string): Promise<void>;
    /**
     * Synchronizes the wallet with the connector.
     * @returns A promise that resolves when the wallet is connected and active.
     */
    sync(): Promise<void>;
}
export interface WalletConstructor<T extends InternalWalletConnector> {
    new (props: WalletProps<T>): Wallet<T>;
}

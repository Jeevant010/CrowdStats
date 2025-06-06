import { Account, LocalAccount, Transport, WalletClient, Chain } from 'viem';
import { WalletUiUtils } from '@dynamic-labs/types';
import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    address: `0x${string}`;
    account: () => Promise<LocalAccount>;
    chain: Chain;
    transport: Transport;
    walletConnector: InternalWalletConnector;
    walletUiUtils: WalletUiUtils<InternalWalletConnector>;
};
/**
 * Creates a WalletClient with UI confirmation for sensitive actions.
 *
 * This function initializes a WalletClient instance that integrates with a UI
 * for user confirmations. It wraps the provided transport with additional functionality
 * to handle personal sign requests, transaction sending, and signing typed data by
 * injecting UI confirmation steps before proceeding with the actual wallet actions.
 *
 * @param {Props} props - The properties required to create a WalletClient with UI confirmation.
 * @param {LocalAccount} props.account - The local account to be used with the WalletClient.
 * @param {Chain} props.chain - The blockchain chain to which the WalletClient will connect.
 * @param {Transport} props.transport - The transport layer responsible for communication with the blockchain.
 * @param {WalletUiUtils} props.walletUiUtils - The UI utility functions for the InternalWalletConnector.
 *
 * @returns {WalletClient<Transport, Chain, Account>} An instance of WalletClient equipped with UI confirmation logic.
 */
export declare const createWalletClientWithUiConfirmation: ({ address, account, chain, transport, walletConnector, walletUiUtils, }: Props) => WalletClient<Transport, Chain, Account>;
export {};

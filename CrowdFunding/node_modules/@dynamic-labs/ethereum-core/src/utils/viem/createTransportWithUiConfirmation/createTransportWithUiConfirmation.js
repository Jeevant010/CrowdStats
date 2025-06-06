'use client'
import { __awaiter } from '../../../../_virtual/_tslib.js';
import { confirmationTransport } from '../confirmationTransport/confirmationTransport.js';

/**
 * Creates a viem transport with user interface confirmation for Ethereum-related operations.
 *
 * This function wraps a `Transport` object with additional UI confirmation logic for
 * personal sign requests, transaction sending, and signing typed data using the provided
 * `WalletUiUtils`. The function intercepts various Ethereum-related operations to
 * inject custom UI handling logic.
 *
 * @param {Object} props - The properties to configure the transport.
 * @param {WalletUiUtils} props.walletUiUtils - The UI utility functions for wallet operations.
 * @param {PublicClient} props.publicClient - The public client for interacting with Ethereum.
 * @param {Transport} props.transport - The transport layer to be wrapped.
 * @returns {Transport} The transport layer wrapped with UI confirmation logic.
 */
const createTransportWithUiConfirmation = ({ walletUiUtils, publicClient, transport, walletConnector, }) => confirmationTransport({
    onPersonalSign: (_a) => __awaiter(void 0, [_a], void 0, function* ({ args, provider }) { return provider.request(args); }),
    onSendTransaction: (_b) => __awaiter(void 0, [_b], void 0, function* ({ args, provider }) { return provider.request(args); }),
    onSignTypedData: (_c) => __awaiter(void 0, [_c], void 0, function* ({ args, provider }) { return provider.request(args); }),
    provider: publicClient,
    transport,
    walletConnector,
    walletUiUtils,
});

export { createTransportWithUiConfirmation };

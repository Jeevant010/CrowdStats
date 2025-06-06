/**
 * Generic type for a transaction to navigate through the different chains
 * for sending transaction with dynamic's UI
 */
export interface IUITransaction {
    /**
     * The address of the recipient.
     *
     * This can start out as undefined because it will be set by the user from the UI.
     */
    to: string | undefined;
    /**
     * The address of the sender.
     *
     * This field normally needs to be automatically set from the wallet connector implementing
     * [createUiTransaction].
     */
    from: string;
    /**
     * The value of the transaction in atomic units (MIST for SUI, Lamports for SOL, etc.)
     *
     * This can start out as undefined because it will be set by the user from the UI.
     */
    value: bigint | undefined;
    /**
     * The value of the transaction in non-native atomic units.
     *
     * [parseNonNativeToken] will determine how many decimals this is.
     */
    nonNativeValue?: bigint;
    /**
     * The address of the recipient that won't be validated by [validateAddressFormat].
     */
    nonNativeAddress?: string;
    /**
     * The number of decimals for the non-native token.
     */
    nonNativeDecimal?: number;
    /**
     * The chain of the transaction, e.g. "ETH", "SOL", "SUI", etc.
     */
    chain: string;
    /**
     * The data of the transaction.
     *
     * New implementations of [createUiTransaction] can start with this undefined.
     */
    data: string | undefined;
    /**
     * The native price of the transaction, fetched programmatically.
     *
     * This should start out as undefined because it will typically be set from the UI.
     */
    nativePrice?: number;
    /**
     * Multiple transactions to be executed in the same call.
     *
     * Check out [SolanaUiTransactions] for an example of how to implement this.
     */
    multipleTransactions?: any[];
    /**
     * The fee of the transaction in atomic units.
     *
     * This should start out as undefined and then be set by [fetchFee]. It will be
     * rendered in the UI as the "Network Fee" field.
     */
    fee: {
        gas: bigint | undefined;
    };
    /**
     * Parses the input string from the UI into a value in atomic units.
     */
    parse: (input: string) => bigint;
    /**
     * Parses the input string from the UI into a value in atomic units for non-native tokens.
     */
    parseNonNativeToken?: (input: string, decimals: number) => bigint;
    /**
     * Formats the value into a string for the UI.
     */
    format: (value: bigint, options?: IUITransactionFormatOptions) => string;
    /**
     * Formats the value into a string for the UI for non-native tokens.
     */
    formatNonNativeToken?: (value: bigint, decimals: number) => string;
    /**
     * The receipt of the transaction.
     *
     * @deprecated This is currently not used anywhere.
     */
    receipt: string | undefined;
    /**
     * Creates and runs the transaction.
     *
     * Currently, we implement this by generating a transaction and calling an onSubmit
     * callback passed in the constructor.
     */
    submit: () => Promise<any>;
    /**
     * Fetches the balance of the sender in atomic units.
     *
     * This value is shown under the "Enter amount" field.
     */
    getBalance: () => Promise<bigint>;
    /**
     * Fetches the fee for the transaction.
     *
     * This function should set fee.gas
     */
    fetchFee: () => Promise<void>;
    /**
     * Additional helper to determine the recipient if it's not just the "to" field.
     *
     * Currently only used in [ViemUiTransaction].
     */
    getTransactionRecipient?: () => string | undefined;
    /**
     * Validates the address format.
     */
    validateAddressFormat: (address: string) => boolean;
    /**
     * Whether the transaction is gas sponsored.
     */
    isGasSponsored?: () => boolean;
}
export interface IUITransactionFormatOptions {
    precision?: number;
}
export type TransactionReceipt<status = 'success' | 'reverted'> = {
    /** `success` if this transaction was successful or `reverted` if it failed */
    status: status;
};

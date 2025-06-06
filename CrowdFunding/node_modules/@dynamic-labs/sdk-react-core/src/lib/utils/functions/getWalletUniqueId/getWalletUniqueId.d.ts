/**
 * Generates a unique id for a wallet, based on the address,
 * connector key, and chain.
 * This is used to identify a wallet no matter if it's connected only or linked.
 */
export declare const getWalletUniqueId: ({ address, connectorKey, chain, }: {
    address: string;
    connectorKey: string;
    chain: string;
}) => string;

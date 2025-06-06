'use client'
/**
 * Generates a unique id for a wallet, based on the address,
 * connector key, and chain.
 * This is used to identify a wallet no matter if it's connected only or linked.
 */
const getWalletUniqueId = ({ address, connectorKey, chain, }) => `${connectorKey}-${address}-${chain}`;

export { getWalletUniqueId };

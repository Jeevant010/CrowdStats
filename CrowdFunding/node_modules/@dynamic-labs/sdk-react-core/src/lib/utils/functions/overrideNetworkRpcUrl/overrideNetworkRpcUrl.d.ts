import { GenericNetwork } from '@dynamic-labs/types';
/**
 * Will override the rpcUrl of the networks in the first param with the urls specified in the second param.
 *
 * @example
 * const DynamicSettings = {
 *    overrides: {
 *        evmNetworks: (networks) => overrideNetworkRpcUrl(networks, {
 *            "1": ["https://eth.customrpc.com", "https://eth.customrpc2.com"],
 *            "137": ["https://polygon.customrpc.com"],
 *        }),
 *    }
 * }
 */
export declare const overrideNetworkRpcUrl: (networks: GenericNetwork[], rpcUrlOverrides: Record<string, string[]>) => GenericNetwork[];

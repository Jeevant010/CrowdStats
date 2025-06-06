import { GenericNetwork } from '@dynamic-labs/types';
/**
 * Will merge the networks in the first param to the networks in the second param.
 * The firs param's networks will have priority in case of conflicts.
 *
 * @example
 * const DynamicSettings = {
 *    overrides: {
 *        evmNetworks: (networks) => mergeNetworks(myEvmNetworks, networks),
 *    }
 * }
 */
export declare const mergeNetworks: (priorityNetworks: GenericNetwork[], secondaryNetworks: GenericNetwork[]) => GenericNetwork[];

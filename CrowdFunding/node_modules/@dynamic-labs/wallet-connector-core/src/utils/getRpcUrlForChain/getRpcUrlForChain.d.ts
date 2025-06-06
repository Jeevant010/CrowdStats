import { EvmNetwork } from '@dynamic-labs/types';
export declare const getRpcUrlForChain: ({ networks, chainId, }: {
    networks: EvmNetwork[];
    chainId: number | undefined;
}) => string | undefined;

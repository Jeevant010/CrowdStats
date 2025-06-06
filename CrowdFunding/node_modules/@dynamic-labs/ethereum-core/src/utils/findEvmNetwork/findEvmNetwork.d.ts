import { EvmNetwork } from '@dynamic-labs/types';
export declare const findEvmNetwork: ({ chainId, name, networks, }: {
    chainId?: number;
    name?: string;
    networks: EvmNetwork[];
}) => EvmNetwork | undefined;

import { Wallet } from '../../../shared';
export declare const useSwitchNetwork: () => ({ wallet, network, }: {
    wallet: Wallet;
    network: number | string;
}) => Promise<void>;

import { Wallet } from '../../../shared/types';
type IsWalletConnectedArg = Pick<Wallet, 'address' | 'chain' | 'connector'>;
export declare const isWalletConnected: ({ address, chain, connector, }: IsWalletConnectedArg) => Promise<boolean>;
export {};

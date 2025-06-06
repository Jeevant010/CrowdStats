import { Wallet } from '../../../shared';
export declare const getWalletIdentifier: ({ address, connector, }: Pick<Wallet, 'address' | 'connector'>) => `${string}+${string}`;

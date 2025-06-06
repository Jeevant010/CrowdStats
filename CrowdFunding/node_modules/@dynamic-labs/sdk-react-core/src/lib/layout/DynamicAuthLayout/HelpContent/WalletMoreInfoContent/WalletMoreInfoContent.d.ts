import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
interface Props {
    variant: 'connect' | 'sign';
    wallet?: WalletConnector;
}
export declare const WalletMoreInfoContent: ({ variant, wallet, }: Props) => JSX.Element;
export {};

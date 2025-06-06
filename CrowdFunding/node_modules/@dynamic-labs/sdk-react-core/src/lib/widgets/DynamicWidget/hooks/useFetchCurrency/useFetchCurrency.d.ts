import { WalletConnector } from '../../../../..';
type Currency = {
    name: string | undefined;
    symbol: string | undefined;
};
export declare const useFetchCurrency: (connector: WalletConnector | undefined, network?: number | string) => {
    currency: Currency | null;
    isLoading: boolean;
};
export {};

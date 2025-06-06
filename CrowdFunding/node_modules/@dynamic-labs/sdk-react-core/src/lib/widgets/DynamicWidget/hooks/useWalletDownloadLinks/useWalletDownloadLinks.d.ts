import { Icon } from '../../../../shared';
import { WalletConnector } from '../../../../..';
export type WalletDownloadLink = {
    Icon: Icon;
    key: string;
    link: string;
    name: string;
};
export declare const useWalletDownloadLinks: (walletConnector?: WalletConnector | null) => WalletDownloadLink[];

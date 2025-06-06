import type { WalletLinks } from '@dynamic-labs/wallet-connector-core';
import { BrowserName } from '../../../shared';
interface WalletLinksHelperProps {
    canShowAndroidAppButton: boolean;
    canShowIosAppButton: boolean;
    currentDesktopUrl: string;
    hasMobileAppUrl: boolean;
    userBrowser: BrowserName;
}
export declare const parseWalletLinks: (links: WalletLinks) => WalletLinksHelperProps;
export {};

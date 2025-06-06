import type { Wallet } from '@dynamic-labs/wallet-connector-core';
import { OnrampProviders } from '@dynamic-labs/sdk-api-core';
export declare const ONRAMP_POPUP_CONFIG: {
    readonly height: 600;
    readonly width: 500;
};
/**
 * Opens an onramp popup and sets up event listeners to handle popup closure
 * @param url The base URL to open in the popup
 * @param wallet The user's wallet (optional)
 * @param setShowOnramp Callback to update the UI state when popup is closed
 * @param provider The onramp provider ID
 * @returns A promise that resolves when the popup is opened
 * @throws Error if there are issues with URL, wallet compatibility, etc.
 */
export declare const openOnrampPopup: (url: string, wallet: Wallet | undefined, setShowOnramp: (show: boolean) => void, provider?: OnrampProviders) => Promise<void>;

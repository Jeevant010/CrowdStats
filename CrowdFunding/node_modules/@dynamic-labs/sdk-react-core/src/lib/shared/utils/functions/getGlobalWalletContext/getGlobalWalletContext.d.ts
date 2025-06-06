declare global {
    interface Window {
        isGlobalWalletPopup: boolean;
        globalWalletContext: {
            requesterOrigin: string;
        };
    }
}
export declare const getGlobalWalletContext: () => {
    requesterOrigin?: string;
};

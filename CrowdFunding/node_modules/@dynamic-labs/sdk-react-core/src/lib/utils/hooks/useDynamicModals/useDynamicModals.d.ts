import { Dispatch, SetStateAction } from 'react';
/**
 * this hook wraps `setShowAuthFlow`. WalletConnect requires initialization
 * before we can connect a wallet. The goal here is that when a user clicks
 * on the "Log in or sign up" button, the SDK starts initializing WalletConnect
 * and will prime it for connection. This way, when the user clicks on the
 * "Connect" button in the WalletConnect modal, there is a uri ready to go
 * to immediately trigger the deep link on mobile
 */
export declare const useDynamicModals: () => {
    setShowLinkNewWalletModal: Dispatch<SetStateAction<boolean>>;
    setShowMFAManage: Dispatch<SetStateAction<boolean>>;
    setShowMfaChooseType: Dispatch<SetStateAction<boolean>>;
    setShowMfaEnterBackupCodes: Dispatch<SetStateAction<boolean>>;
    setShowMfaQRCode: Dispatch<SetStateAction<boolean>>;
    setShowMfaViewBackupCodes: Dispatch<SetStateAction<boolean>>;
    setShowOTPVerification: Dispatch<SetStateAction<boolean>>;
};

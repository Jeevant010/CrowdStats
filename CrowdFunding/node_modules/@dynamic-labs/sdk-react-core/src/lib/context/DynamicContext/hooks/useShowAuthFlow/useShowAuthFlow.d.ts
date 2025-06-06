import { SetStateAction } from 'react';
import { IDynamicContext } from '../../types';
export type SetShowAuthFlowOptions = {
    /**
     * WalletConnect requires initialization before we can connect a wallet.
     * The goal here is that when the auth flow opens, the
     * SDK starts initializing WalletConnect and will prime it for connection.
     * This way, when the user clicks on the "Connect" button in the WalletConnect modal,
     * there is a uri ready to go to immediately trigger the deep link on mobile
     */
    initializeWalletConnect?: boolean;
    /** Makes this call be ignored if setting to true when there is an embedded widget on screen  */
    ignoreIfIsEmbeddedWidget?: boolean;
    /**
     * When setting to true while logged in:
     *   1. If multi wallet is false, ignores the call — handy to prevent users from
     *   getting to the link new wallet screen without multi wallet
     *   2. If multi wallet is true, logs a warning to use setShowLinkNewWalletModal instead
     */
    performMultiWalletChecks?: boolean;
    /** When setting to false, emits authFlowCancelled event and callback */
    emitCancelAuth?: boolean;
    /** Whether to clear the current error from ErrorContext */
    clearErrors?: boolean;
};
export type SetShowAuthFlow = (value: SetStateAction<boolean>, options?: SetShowAuthFlowOptions) => void;
export type UseShowAuthFlowParams = {
    isMultiWalletEnabled: boolean;
    isRenderingEmbeddedAuthFlow: IDynamicContext['isRenderingEmbeddedAuthFlow'];
    setShowDynamicUserProfile: IDynamicContext['setShowDynamicUserProfile'];
};
/**
 * There are a multitude of scenarios where we want to ignore or insert functionality to calls
 * to setShowAuthFlow. This hook wraps it with an options parameter to allow encapsulating these
 * different scenarios and makes it especially easy to customize exactly which version of this method
 * is being passed to useDynamicContext.
 */
export declare const useShowAuthFlow: ({ isRenderingEmbeddedAuthFlow, isMultiWalletEnabled, setShowDynamicUserProfile, }: UseShowAuthFlowParams) => [boolean, SetShowAuthFlow];

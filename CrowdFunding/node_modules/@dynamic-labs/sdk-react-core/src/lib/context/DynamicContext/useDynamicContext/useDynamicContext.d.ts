import { Dispatch, SetStateAction } from 'react';
import { AuthMode } from '@dynamic-labs/types';
import { IDynamicContext } from '../types';
export type UseDynamicContext = Pick<IDynamicContext, 'accountSwitchState' | 'awaitingSignatureState' | 'getNameService' | 'handleLogOut' | 'removeWallet' | 'loadingNetwork' | 'locale' | 'loginWithEmail' | 'multiWalletWidgetState' | 'network' | 'networkConfigurations' | 'primaryWallet' | 'qrcodeUri' | 'refetchProjectSettings' | 'sdkHasLoaded' | 'setLogInWithEmail' | 'setMultiWalletWidgetState' | 'setShowDynamicUserProfile' | 'setShowQrcodeModal' | 'shadowDOMEnabled' | 'showAuthFlow' | 'showQrcodeModal' | 'user' | 'userWithMissingInfo' | 'bridgeChains' | 'bridgeChainsToConnect' | 'setShowBridgeWidget' | 'sendWagmiSettings' | 'showDynamicUserProfile' | 'selectedTabIndex' | 'setSelectedTabIndex'> & {
    setShowAuthFlow: Dispatch<SetStateAction<boolean>>;
    /**
     * @deprecated Use removeWallet instead
     */
    handleUnlinkWallet: (walletId: string) => void;
    setAuthMode: (value: AuthMode) => void;
    authMode: AuthMode;
};
export declare const useDynamicContext: () => UseDynamicContext;

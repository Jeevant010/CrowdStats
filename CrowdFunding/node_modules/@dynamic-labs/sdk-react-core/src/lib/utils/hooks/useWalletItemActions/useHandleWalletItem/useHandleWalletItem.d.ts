import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletOption } from '../../../../shared/types/wallets';
import { ConnectAndSignProps } from '../../authenticationHooks/useConnectAndSign/useConnectAndSign';
import { OnlyConnectUserProps } from '../../authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps';
import { OpenWalletHandler } from '../useWalletItemActions.types';
type UseHandleWalletItemProps = {
    allowAlreadyConnectedWallet: boolean;
    onConnectOnly: (props: OnlyConnectUserProps) => Promise<void>;
    onQrCodeConnect: (props: ConnectAndSignProps) => Promise<void>;
    onCustodialWallet: (props: {
        walletConnector: InternalWalletConnector;
        requiresTwoStepAuthentication: boolean;
    }) => Promise<void>;
    onInstalledExtension: (props: {
        walletConnector: InternalWalletConnector;
    }) => Promise<void>;
};
export declare const useHandleWalletItem: ({ allowAlreadyConnectedWallet, onQrCodeConnect, onConnectOnly, onCustodialWallet, onInstalledExtension, }: UseHandleWalletItemProps) => {
    handleAlreadyConnectedWallet: (walletConnector: InternalWalletConnector) => Promise<void>;
    handleCustodialWalletClick: (walletConnector: InternalWalletConnector) => Promise<void>;
    handleInstalledExtensionClick: (walletConnector: InternalWalletConnector) => Promise<void>;
    handleMobileWalletClick: (walletConnector: InternalWalletConnector) => Promise<void>;
    handleUninstalledClick: (walletConnector: InternalWalletConnector) => Promise<void>;
    handleWalletItemClick: (wallet: WalletOption) => Promise<void>;
    openWallet: OpenWalletHandler;
};
export {};

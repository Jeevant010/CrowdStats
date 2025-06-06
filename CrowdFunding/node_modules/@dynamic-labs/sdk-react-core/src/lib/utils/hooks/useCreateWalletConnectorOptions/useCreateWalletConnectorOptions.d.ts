import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
import { type MobileExperience, type CoinbaseWalletPreference, type NetworkConfigurationMap, type WalletUiUtils } from '@dynamic-labs/types';
import { DeepLinkVariant, InternalWalletConnector, WalletConnectorExtension, WalletConnectorsMethod } from '@dynamic-labs/wallet-connector-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
export type WalletConnectorProps = {
    appLogoUrl?: string;
    appName?: string;
    coinbaseWalletPreference?: CoinbaseWalletPreference;
    deepLinkPreference?: DeepLinkVariant;
    flowNetwork?: 'mainnet' | 'testnet';
    mobileExperience?: MobileExperience;
    networkConfigurations: NetworkConfigurationMap | undefined;
    projectSettings: ProjectSettings | undefined;
    walletBook: WalletBookSchema;
    walletConnectPreferredChains?: `eip155:${number}`[];
    walletConnectorsProp?: WalletConnectorsMethod[];
    walletUiUtils: WalletUiUtils<InternalWalletConnector>;
    walletConnectorExtensions?: WalletConnectorExtension[];
};
export declare const useCreateWalletConnectorOptions: ({ projectSettings, networkConfigurations, walletBook, walletConnectorsProp, walletConnectorExtensions, ...props }: WalletConnectorProps) => {
    walletConnectorOptions: import("../../../shared").WalletOption[];
};

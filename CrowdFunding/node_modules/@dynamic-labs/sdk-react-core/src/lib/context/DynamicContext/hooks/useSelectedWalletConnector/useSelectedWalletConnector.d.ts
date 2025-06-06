/// <reference types="react" />
import { WalletOption } from '../../../../shared';
type useSelectedWalletConnectorProps = {
    walletConnectorOptions: WalletOption[];
};
export declare const useSelectedWalletConnector: ({ walletConnectorOptions, }: useSelectedWalletConnectorProps) => {
    selectedWalletConnector: import("dist/packages/wallet-connector-core/src").WalletConnectorCore.WalletConnector | null;
    setSelectedWalletConnectorKey: import("react").Dispatch<import("react").SetStateAction<string | null>>;
};
export {};

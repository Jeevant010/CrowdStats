import { WalletCapabilities } from 'viem';
export type WalletCapabilitiesMap = {
    [chainId: number]: WalletCapabilities;
};

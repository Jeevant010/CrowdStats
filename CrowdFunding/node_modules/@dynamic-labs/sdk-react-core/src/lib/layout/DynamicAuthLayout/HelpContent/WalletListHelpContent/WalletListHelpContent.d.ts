import { ProjectSettingsChains } from '@dynamic-labs/sdk-api-core';
import { ChainToWalletMap } from '../../../../shared';
interface Props {
    chains: ProjectSettingsChains[] | undefined;
    newToWeb3WalletChainMap: ChainToWalletMap;
}
export declare const WalletListHelpContent: ({ chains, newToWeb3WalletChainMap, }: Props) => JSX.Element;
export {};

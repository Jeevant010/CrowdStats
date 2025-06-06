/// <reference types="react" />
import { NameServiceData } from '@dynamic-labs/sdk-api-core';
import { Wallet as WalletType } from '../../../../shared/types';
type Props = {
    /** If true, clicking the wallet will set it as the primary wallet */
    clickable?: boolean;
    ens?: NameServiceData;
    expanded?: boolean;
    expandedWallet?: string;
    setExpandedWallet?: (str?: string) => void;
    wallet: WalletType;
};
export declare const Wallet: ({ wallet, ens, clickable }: Props) => JSX.Element;
export {};

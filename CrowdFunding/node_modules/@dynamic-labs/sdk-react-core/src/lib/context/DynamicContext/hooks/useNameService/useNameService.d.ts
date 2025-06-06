import { NameServiceData } from '@dynamic-labs/sdk-api-core';
import { Wallet } from '../../../../shared';
import { UserProfile } from '../../../../..';
type Props = {
    user: UserProfile | undefined;
    currentWallet: Wallet | null;
};
export declare const useNameService: ({ currentWallet, user }: Props) => {
    getNameService: (address?: string) => Promise<NameServiceData | undefined>;
    removeConnectedNameService: () => void;
};
export {};

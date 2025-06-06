import { FC } from 'react';
import { SdkViewSection } from '@dynamic-labs/sdk-api-core';
type LoginViewSectionProps = {
    viewSection: SdkViewSection;
    index: number;
    walletCount: number;
    gotToWalletList: VoidFunction;
};
export declare const LoginViewSection: FC<LoginViewSectionProps>;
export {};

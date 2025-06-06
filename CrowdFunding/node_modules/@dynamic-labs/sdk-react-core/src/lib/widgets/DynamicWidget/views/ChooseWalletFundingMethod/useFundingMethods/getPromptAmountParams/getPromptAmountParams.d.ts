import { Wallet } from '../../../../../../shared/types/wallets';
import { ReceiveWalletFundsProps } from '../../../ReceiveWalletFunds/types';
type GetPromptAmountParamsProps = {
    wallet: Wallet;
};
export declare const getPromptAmountParams: ({ wallet, }: GetPromptAmountParamsProps) => ReceiveWalletFundsProps;
export {};

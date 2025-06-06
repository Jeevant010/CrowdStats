import { FC } from 'react';
import { FundingTokenData } from '../../types';
type TokenOptionProps = {
    token: FundingTokenData;
    isSelected: boolean;
    onSelect: () => void;
    showTokenAsPrimary: boolean;
    exchangeRates: Record<string, number>;
};
export declare const TokenOption: FC<TokenOptionProps>;
export {};

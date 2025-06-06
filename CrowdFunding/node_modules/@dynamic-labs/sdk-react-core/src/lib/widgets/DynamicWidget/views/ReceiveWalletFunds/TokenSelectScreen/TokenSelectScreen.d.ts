import { FC } from 'react';
import { ClassStyleProps } from '../../../../../utils/types';
import { FundingTokenData } from '../types';
type TokenSelectScreenProps = ClassStyleProps & {
    onClose: () => void;
    onSelectToken: (token: FundingTokenData['symbol']) => void;
    tokens: FundingTokenData[];
    currentToken: FundingTokenData['symbol'];
    showTokenAsPrimary: boolean;
    exchangeRates: Record<string, number>;
};
export declare const TokenSelectScreen: FC<TokenSelectScreenProps>;
export {};

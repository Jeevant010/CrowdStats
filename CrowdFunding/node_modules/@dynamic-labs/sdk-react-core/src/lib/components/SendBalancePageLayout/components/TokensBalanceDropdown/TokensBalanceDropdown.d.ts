import { Dispatch, FC, SetStateAction } from 'react';
import { TokenBalance } from '@dynamic-labs/sdk-api-core';
type TokensBalanceDropdownProps = {
    tokenBalances: TokenBalance[] | undefined;
    currentToken: TokenBalance | undefined;
    setCurrentToken: Dispatch<SetStateAction<TokenBalance | undefined>>;
    isLoading?: boolean;
    setFieldValue: (field: string, value: string) => void;
    setErrors: (errors: any) => void;
};
export declare const TokensBalanceDropdown: FC<TokensBalanceDropdownProps>;
export {};

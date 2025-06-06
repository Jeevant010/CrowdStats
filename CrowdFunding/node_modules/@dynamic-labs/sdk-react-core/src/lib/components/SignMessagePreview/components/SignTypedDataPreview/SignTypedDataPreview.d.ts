import { FC } from 'react';
import { SignTypedData } from '../../SignMessagePreview.types';
export declare const SignTypedDataPreview: FC<{
    types: SignTypedData['types'];
    currentType: string;
    data: SignTypedData['message'];
    showTypeName?: boolean;
}>;

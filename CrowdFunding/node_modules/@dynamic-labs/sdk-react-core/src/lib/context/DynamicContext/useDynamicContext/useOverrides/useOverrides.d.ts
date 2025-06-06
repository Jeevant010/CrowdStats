import { AuthMode } from '@dynamic-labs/types';
import { IDynamicContext } from '../../types';
export type DynamicContextOverrides = {
    setAuthMode: (value: AuthMode) => void;
    authMode: AuthMode;
};
export declare const useOverrides: (dynamicContext: IDynamicContext) => DynamicContextOverrides;

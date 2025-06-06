import { SdkStore } from '../../../types';
export type StoreState<N extends Extract<keyof SdkStore, string>> = {
    [K in `use${Capitalize<N>}`]: () => SdkStore[N];
} & {
    [K in `set${Capitalize<N>}`]: (value: SdkStore[N]) => void;
} & {
    [K in `get${Capitalize<N>}`]: () => SdkStore[N];
} & {
    [K in `reset${Capitalize<N>}`]: () => void;
};
export declare const createStoreState: <N extends keyof SdkStore>(variable: N) => StoreState<N>;

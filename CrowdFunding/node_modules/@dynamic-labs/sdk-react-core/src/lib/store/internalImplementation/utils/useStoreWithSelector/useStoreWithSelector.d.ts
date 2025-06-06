import { StoreApi } from '@dynamic-labs/store';
export declare const useStoreWithSelector: <TState extends object, StateSlice>(api: StoreApi<TState>, selector: (state: TState) => StateSlice) => StateSlice;

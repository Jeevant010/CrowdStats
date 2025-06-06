import { PromiseState } from '../../usePromise.types';
type ReducerAction<T = unknown, E = unknown> = {
    type: 'SET_DATA';
    payload: T;
} | {
    type: 'SET_ERROR';
    payload: E;
} | {
    type: 'SET_LOADING';
    payload: boolean;
};
export declare const createReducer: <T = unknown, E = unknown>() => (state: PromiseState<T, E>, action: ReducerAction<T, E>) => PromiseState<T, E>;
export {};

type MutationHookOptions<TData, TError, TVariables> = {
    onFailure?: (error: TError, variables: TVariables) => void;
    onSuccess?: (data: TData, variables: TVariables) => void;
};
type MutateFunction<TData = unknown, TVariables = unknown> = (variables: TVariables) => TData | Promise<TData>;
type UseMutateFunction<TData = unknown, TVariables = unknown> = (...args: Parameters<MutateFunction<TData, TVariables>>) => void;
type MutationHookResult<TData = unknown, TError = unknown, TVariables = unknown> = {
    data?: TData;
    error?: TError;
    hasData: boolean;
    hasError: boolean;
    isLoading: boolean;
    mutate: UseMutateFunction<TData, TVariables>;
};
export declare const useMutation: <TData = unknown, TError = unknown, TVariables = void>(mutation: MutateFunction<TData, TVariables>, options?: MutationHookOptions<TData, TError, TVariables>) => MutationHookResult<TData, TError, TVariables>;
export {};

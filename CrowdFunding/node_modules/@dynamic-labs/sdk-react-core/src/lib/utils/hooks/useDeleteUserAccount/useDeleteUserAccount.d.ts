type UseDeleteUserAccountReturn = {
    deleteUser: () => Promise<void>;
    error: Error | null;
    isLoading: boolean;
};
export declare const useDeleteUserAccount: () => UseDeleteUserAccountReturn;
export {};

/** Hook used to connect with email on login */
export declare const useEmailProvider: () => {
    connectWithEmail: (emailInput: string, onSuccess?: VoidFunction) => Promise<void>;
};

export type ISolanaConnection = {
    getFeeForMessage: (message: any, commitment: string) => Promise<{
        value: string | null;
    }>;
};
export type ISolanaConnector = {
    getConnection: () => Promise<ISolanaConnection>;
};

export type SolanaSignMessagePopupAction = {
    name: 'solana_signMessage';
    func: (args: {
        address: string;
        message: string;
    }) => Promise<{
        signature: string;
        signedMessage: string;
    }>;
};
export type SolanaSignTransactionPopupAction = {
    name: 'solana_signTransaction';
    func: (args: {
        address: string;
        chain: string;
        transaction: string;
    }) => Promise<{
        signedTransaction: string;
    }>;
};
export type SolanaSignAndSendTransactionPopupAction = {
    name: 'solana_signAndSendTransaction';
    func: (args: {
        address: string;
        chain: string;
        transaction: string;
    }) => Promise<{
        signature: string;
    }>;
};

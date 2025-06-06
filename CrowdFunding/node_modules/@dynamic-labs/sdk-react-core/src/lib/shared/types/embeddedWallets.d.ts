export type EmbeddedWalletSessionSettings = {
    emailCode: string;
    userId: string;
    createdAt: number;
};
export type EmbeddedWalletCurrentActionSettings = {
    goBack?: () => void;
};
export type EmbeddedWalletCurrentAction = {
    type: 'signMessage' | 'sendTransaction' | 'helpSession' | 'signTransaction' | 'reveal';
    settings?: EmbeddedWalletCurrentActionSettings;
};

type ConnectWithAppleIdOptions = {
    clientId: string | undefined;
    oauthLoginUrl: URL;
    state: string;
};
export declare const connectWithAppleId: ({ clientId, oauthLoginUrl, state, }: ConnectWithAppleIdOptions) => Promise<void>;
export {};

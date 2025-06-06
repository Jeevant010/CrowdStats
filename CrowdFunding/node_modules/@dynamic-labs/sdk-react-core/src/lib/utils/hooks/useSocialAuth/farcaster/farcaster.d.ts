interface FarcasterConnectRequest {
    siweUri: string;
    domain: string;
    nonce?: string;
    notBefore?: string;
    expirationTime?: string;
    requestId?: string;
    redirectUrl?: string;
}
interface FarcasterConnectResponse {
    /** Connect relay channel token UUID */
    channelToken: string;
    /** Sign in With Farcaster URL to present to the user */
    url: string;
}
interface FarcasterConnectStatusRequest {
    channelToken: string;
}
interface FarcasterConnectStatusSuccessResponse {
    bio: string;
    custody: string;
    displayName: string;
    fid: string;
    message: string;
    nonce: string;
    pfpUrl: string;
    signature: string;
    state: 'pending' | 'completed';
    username: string;
}
type FarcasterConnectStatusResponse = {
    type: 'success';
    data: FarcasterConnectStatusSuccessResponse;
} | {
    type: 'timeout';
    error: string;
} | {
    type: 'cancelled';
};
export declare const connect: (connectRequest: FarcasterConnectRequest) => Promise<FarcasterConnectResponse | undefined>;
export declare const status: (connectStatusRequest: FarcasterConnectStatusRequest, count?: number) => Promise<FarcasterConnectStatusSuccessResponse | {
    error: string;
    state: 'retry';
}>;
export declare const watchStatus: (connectStatusRequest: FarcasterConnectStatusRequest, { timeout, interval }?: {
    timeout?: number | undefined;
    interval?: number | undefined;
}) => Promise<FarcasterConnectStatusResponse>;
export {};

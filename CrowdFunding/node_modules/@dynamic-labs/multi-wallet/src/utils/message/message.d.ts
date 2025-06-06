import { Chain } from '@dynamic-labs/wallet-connector-core';
export interface MessageParameters {
    blockchain: Chain;
    chainId?: number | string;
    domain: string;
    issuedAt?: string;
    nonce: string;
    publicKey: string;
    requestId?: string;
    resources?: string[];
    statement?: string;
    uri: string;
}
export declare const generateMessageToSign: ({ blockchain, domain, chainId, nonce, uri, publicKey, issuedAt, statement, requestId, resources, }: MessageParameters) => string;

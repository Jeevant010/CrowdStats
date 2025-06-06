/// <reference types="node" />
export type ISolanaAccountKey = {
    toBase58: () => string;
};
export type ISolanaVersionedTransaction = {
    serialize: (opts: {
        requireAllSignatures: boolean;
    }) => Uint8Array | Buffer;
    version: number | string;
    message: {
        staticAccountKeys: ISolanaAccountKey[];
        compiledMessage?: {
            serialize: () => Uint8Array;
        };
    };
    compileMessage?: () => Promise<any> | any;
};
export type ISolanaLegacyTransaction = {
    serialize: () => Uint8Array | Buffer;
    feePayer?: ISolanaAccountKey;
    compileMessage?: () => Promise<any> | any;
};
export type ISolanaTransaction = ISolanaVersionedTransaction | ISolanaLegacyTransaction;

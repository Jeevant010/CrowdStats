export type TurnkeyWalletConnectorNameAndKey = {
    key: string;
    name: string;
};
export declare const TurnkeyWalletConnectorInfo: {
    Turnkey: TurnkeyWalletConnectorNameAndKey;
    TurnkeyHD: TurnkeyWalletConnectorNameAndKey;
};
export type TurnkeyActivityError = {
    message: string;
    cause: {
        code: number;
        name: string;
    };
    stack: string;
};

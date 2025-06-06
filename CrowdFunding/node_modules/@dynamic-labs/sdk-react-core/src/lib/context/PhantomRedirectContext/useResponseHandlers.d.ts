import { IPhantomRedirectConnectorWithEvents } from '@dynamic-labs/wallet-connector-core';
export declare const useResponseHandlers: () => {
    handleConnectResponse: () => Promise<void>;
    handleErrorResponse: (params: URLSearchParams) => void;
    handleUserResponse: () => Promise<void>;
    phantomRedirectConnector: IPhantomRedirectConnectorWithEvents;
};

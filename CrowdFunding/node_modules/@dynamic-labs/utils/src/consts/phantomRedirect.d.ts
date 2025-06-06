export declare const PHANTOM_REDIRECT_CONNECTION_TYPE_KEY = "phantom-redirect-connection-type";
export type PhantomRedirectConnectionType = {
    /**
     * Reason for this connection
     */
    type: 'default' | 'external-wallet-funding';
    /**
     * Whether connector has already consumed and validated this connection type
     */
    connectorConsumed: boolean;
    /**
     * Whether this connection was initiated by the widget UI or headless code
     */
    initiatedByWidget: boolean;
};

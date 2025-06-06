export interface PairingInfo {
    id: number;
    params: {
        id: number;
        pairingTopic: string;
        expiryTimestamp: number;
        requiredNamespaces: Record<string, unknown>;
        optionalNamespaces: {
            eip155: {
                chains: string[];
                methods: string[];
                events: string[];
                rpcMap: {
                    [key: string]: string;
                };
            };
        };
        relays: Array<{
            protocol: string;
        }>;
        proposer: {
            publicKey: string;
            metadata: {
                name: string;
                description: string;
                url: string;
                icons: string[];
            };
        };
    };
}

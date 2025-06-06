import { WalletConnectorBase } from '../WalletConnectorBase';
export interface ITurnkeyWalletConnectorStamper extends WalletConnectorBase {
    stampCreateWalletAccountRequest: ({ request, }: {
        request: {
            type: string;
            timestampMs: string;
            organizationId: string;
            parameters: any;
        };
    }) => Promise<{
        body: string;
        url: string;
        stamp: {
            stampHeaderName: string;
            stampHeaderValue: string;
        };
    }>;
    stampDeleteSubOrganizationRequest: ({ request, }: {
        request: {
            type: string;
            timestampMs: string;
            organizationId: string;
            parameters: {
                deleteWithoutExport?: boolean;
            };
        };
    }) => Promise<{
        body: string;
        url: string;
        stamp: {
            stampHeaderName: string;
            stampHeaderValue: string;
        };
    }>;
}

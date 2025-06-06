import { DynamicError } from '@dynamic-labs/utils';
export declare class ConnectorSetupError extends DynamicError {
    constructor(providerName: string, connectorName: string);
}

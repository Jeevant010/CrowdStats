import { NameServiceData } from '@dynamic-labs/sdk-api-core';
export type NameServiceDataWithAddress = NameServiceData & {
    address: string;
    network: string | number | undefined;
};

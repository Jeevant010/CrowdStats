import { HTTPHeaders, SDKApi } from '@dynamic-labs/sdk-api-core';
interface SdkApiParams {
    customHeaders?: HTTPHeaders;
}
export declare const sdkApi: ({ customHeaders }?: SdkApiParams) => SDKApi;
export {};

'use client'
import { Configuration } from '@dynamic-labs/sdk-api-core';

/* eslint-disable no-underscore-dangle */
class ApiEndpoint {
}
ApiEndpoint.getBaseUrl = () => {
    if (!ApiEndpoint.__baseUrl__) {
        throw new Error('ApiEndpoint Base URL has not been initialized');
    }
    return ApiEndpoint.__baseUrl__;
};
ApiEndpoint.setBaseUrl = (baseUrlInput) => {
    if (!baseUrlInput) {
        /**
         * If the baseUrl is not provided, use the default baseUrl from the sdk-api package
         */
        ApiEndpoint.__baseUrl__ = new Configuration().basePath;
    }
    else {
        ApiEndpoint.__baseUrl__ = baseUrlInput;
    }
};

export { ApiEndpoint as default };

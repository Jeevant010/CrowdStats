import type { DynamicClient, DynamicClientConfig } from '../types';
/**
 * Creates a new DynamicClient instance.
 *
 * Notice the `autoInitialize` flag is true by default (unless you're running
 * in SSR), so the client will be automatically initialized when created — if
 * you want to manually initialize the client, you can set the `autoInitialize`
 * flag to false and then later call the `initializeClient` function.
 *
 * Manually calling `initializeClient` also allows you to catch any potential
 * errors that may occur during initialization.
 */
export declare const createDynamicClient: (config: DynamicClientConfig) => DynamicClient;
//# sourceMappingURL=createDynamicClient.d.ts.map
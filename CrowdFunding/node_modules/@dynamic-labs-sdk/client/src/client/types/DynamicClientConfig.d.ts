import type { DynamicCoreConfig } from "../core/types";
/**
 * All available options to configure the Dynamic client.
 */
export type DynamicClientConfig = {
    /**
     * Whether to automatically initialize the client.
     *
     * If disabled, the client will be uninitialized and you will need to call
     * `initializeClient` with it manually.
     *
     * @defaultValue `true`
     */
    autoInitialize?: boolean;
    /**
     * Available options for internal configuration of the Dynamic SDK client.
     * Ignore unless you know what you are doing.
     */
    coreConfig?: DynamicCoreConfig;
    /**
     * The environment ID of the Dynamic app.
     */
    environmentId: string;
    /**
     * Metadata relating to your app.
     */
    metadata?: {
        /**
         * The URL of the icon of your app.
         */
        iconUrl?: string;
        /**
         * The name of your app.
         */
        name?: string;
        /**
         * The URL of your app.
         */
        url?: string;
    };
};
//# sourceMappingURL=DynamicClientConfig.d.ts.map
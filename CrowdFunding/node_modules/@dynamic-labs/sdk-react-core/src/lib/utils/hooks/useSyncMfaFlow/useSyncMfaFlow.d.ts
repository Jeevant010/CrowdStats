/**
 * This hook is used to ensure we show the correct MFA view on page refresh
 */
export declare const useSyncMfaFlow: ({ handler: headlessHandler, }?: {
    handler?: () => Promise<void>;
}) => void;

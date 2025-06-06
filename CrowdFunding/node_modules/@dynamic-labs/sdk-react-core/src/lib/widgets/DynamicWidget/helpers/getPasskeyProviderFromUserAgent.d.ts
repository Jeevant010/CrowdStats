export type PasskeyProviders = 'android' | 'brave' | 'chrome' | 'edge' | 'firefox' | 'iPhone' | 'opera' | 'safari';
export declare const getPasskeyProviderFromUserAgent: (userAgent: string) => PasskeyProviders | undefined;

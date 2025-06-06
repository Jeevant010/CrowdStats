export declare enum SubdomainCheckResponseError {
    CHECK_FAILED = 0
}
export type SubdomainCheckResponse = {
    available: boolean;
    error?: SubdomainCheckResponseError;
};
/** Hook to check if a subdomain is available */
export declare const useSubdomainCheck: () => ({ subdomain, }: {
    subdomain: string;
}) => Promise<SubdomainCheckResponse>;

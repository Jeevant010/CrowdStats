type UseFetchNameServiceProps = {
    address?: string;
    chain?: string;
};
export declare const useFetchNameService: ({ address, chain, }?: UseFetchNameServiceProps) => import("@dynamic-labs/sdk-api-core").NameServiceData | undefined;
export {};

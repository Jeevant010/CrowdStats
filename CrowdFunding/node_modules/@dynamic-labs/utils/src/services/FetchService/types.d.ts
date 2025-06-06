export type IFetchService = {
    fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
};

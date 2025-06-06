import { IFetchService } from './types';
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */
export declare class FetchService {
    #private;
    static get implementation(): IFetchService;
    static set implementation(implementation: IFetchService);
    static get fetch(): (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
}

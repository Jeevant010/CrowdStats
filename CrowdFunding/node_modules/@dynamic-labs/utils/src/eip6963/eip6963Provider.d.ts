import { type EventEmitter } from 'eventemitter3';
export type IEthereum = {
    [key: string]: any;
    providers?: object[];
    request: <T extends string>(params: {
        method: T;
    } | object) => Promise<T extends 'eth_requestAccounts' ? [string] : object>;
} & EventEmitter;
/**
 * Represents the assets needed to display a wallet
 */
export type Eip6963ProviderInfo = {
    uuid: string;
    name: string;
    icon: string;
    rdns: string;
};
export type Eip6963ProviderDetail = {
    info: Eip6963ProviderInfo;
    provider: IEthereum;
};
export type Eip6963AnnounceProviderEvent = CustomEvent & {
    type: 'eip6963:announceProvider';
    detail: Eip6963ProviderDetail;
};
export declare const isEip9693Event: (event: unknown) => event is Eip6963AnnounceProviderEvent;
export declare const listenToEip6963Events: (handler: (event: Eip6963AnnounceProviderEvent) => void) => () => void;
export declare class Eip6963Provider {
    providers: Eip6963ProviderDetail[];
    registerProviders(): void;
}
export declare class Eip6963ProviderSingleton {
    readonly eip6963Provider: Eip6963Provider;
    private constructor();
    private static instance;
    static get(): Eip6963Provider;
}

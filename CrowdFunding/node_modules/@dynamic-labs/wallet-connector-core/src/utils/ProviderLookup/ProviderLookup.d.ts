export type ProviderCondition<T = unknown> = {
    flag: T;
    value: boolean;
};
export declare const ProviderLookup: <T extends { [key in Flag]: boolean; }, Flag extends string>(installedProviders: T[], extensionLocators: Array<ProviderCondition<Flag>>) => T | undefined;

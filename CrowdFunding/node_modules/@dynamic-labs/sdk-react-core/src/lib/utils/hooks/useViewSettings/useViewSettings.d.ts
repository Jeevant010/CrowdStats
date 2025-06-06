export declare const useViewSettings: <T extends import("@dynamic-labs/sdk-api-core").SdkViewType | "wallet-list", R extends Extract<import("@dynamic-labs/sdk-api-core").SdkView, {
    type: T;
}> | Extract<import("../../../context/DynamicContext/types").WalletListViewSettings, {
    type: T;
}> | undefined = Extract<import("@dynamic-labs/sdk-api-core").SdkView, {
    type: T;
}> | Extract<import("../../../context/DynamicContext/types").WalletListViewSettings, {
    type: T;
}> | undefined>(viewType: T) => R;

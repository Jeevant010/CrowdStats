export type ZkSyncRequestPopupActionArgs = {
    chainId: number;
    method: string;
    params?: unknown;
};
export type ZkSyncRequestPopupActionResponse = {
    data: unknown;
};
export type ZkSyncRequestPopupAction = {
    name: 'zksync-request';
    func: (args: ZkSyncRequestPopupActionArgs) => Promise<ZkSyncRequestPopupActionResponse>;
};

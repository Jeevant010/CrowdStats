export type EthereumRequestPopupActionArgs = {
    chainId: number;
    method: string;
    params?: unknown;
    sessionId?: string;
};
export type EthereumRequestPopupActionResponse = {
    data: unknown;
};
export type EthereumRequestPopupAction = {
    name: 'eth-request';
    func: (args: EthereumRequestPopupActionArgs) => Promise<EthereumRequestPopupActionResponse>;
};
